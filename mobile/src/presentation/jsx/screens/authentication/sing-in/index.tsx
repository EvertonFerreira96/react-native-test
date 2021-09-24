import { DynamicActionsHeaderModule } from '../../../modules/headers/dynamic-actions';
import React, {useState} from 'react';

import { useTheme } from 'styled-components';
import { TouchableFilledBorderlessComponent } from '../../../components/actions/touchables/borderless/filled';
import { TouchableTranslucentComponent } from '../../../components/actions/touchables/translucent';
import { SeparatorComponent } from '../../../components/separator';

import { Container, HeaderContainer, WrapperContainer, FooterContainer, AuthenticationContainer, ActionsContainer, Title,  } from './styles';
import { TouchableOutlineBorderlessComponent } from '../../../components/actions/touchables/borderless/outline';
import TextInputComponent from '../../../components/words/text-inputs';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import { AxiosHttpClient } from '../../../../../infra/http';
import { HttpMethod } from '../../../../../data/protocols/http';




export const AuthenticationSignInScreen: React.FC = () => {
  const theme = useTheme(); 
  const {navigate} = useNavigation();

  interface ISchoolsCollections {
    name: string;
    avatar: string;
    contexto: string; 
    id: string; 
  }

  const schoolsCollections: ISchoolsCollections[] = [] as ISchoolsCollections[]; 

  const handleSubimtLogin = async () => {

    const response  = await new AxiosHttpClient().request({
      url: 'https://api.tst2.escolaapp.com/api/v1/Acesso/login',
      method: HttpMethod.Post, 
      body: {
        login: "rntest",
        senha: "teste-123",
        nomeApp: "br.com.eem.teste",
        versaoApp: "10",
        versaoSO: "10",
        idDispositivo: "teste-mobile"
      }
    })

    schoolsCollections.push(...response.body.conteudo.map(item => {
      return (
        {

         avatar:  item.urlLogoContexto,
         name:  item.nomeAplicacao,
         contexto:  item.contexto,
         id: item.guid 
        }
      )
    } ));
    navigate('Home', {
      schools: schoolsCollections as unknown as [] 
    })
  }

  return (
<>
    <KeyboardAvoidingView
    testID="sign-in-screen"
    behavior='position'
    keyboardVerticalOffset={-RFPercentage(15)}
    enabled
  >
    <TouchableWithoutFeedback
      testID="touchable-without-feedback-component"
      onPress={() => Keyboard.dismiss()}
    >
    <Container>
      <HeaderContainer>
      <DynamicActionsHeaderModule 
      size={38}
      icons={[
        {
          location: 'right',
          name: 'question-circle-o',
          lib: 'fontAwesome'
        }
      ]} />
      </HeaderContainer>
      <WrapperContainer>
        <Title>Informe o usuário e a senha encaminhados pela escola</Title>
        <AuthenticationContainer>
          <TextInputComponent placeholder="Usuário" icons={[
        {
          location: 'left',
          name: 'user-o',
          lib: 'fontAwesome',
          
        }
      ]} />
          <TextInputComponent  placeholder="Senha" icons={[
        {
          location: 'left',
          name: 'key-outline',
          
        }
        
      ]} />
          </AuthenticationContainer>
          <TouchableFilledBorderlessComponent title="Entrar" background={theme.colors.secondary.natural}  color={theme.colors.primary.natural}  onPress={() => handleSubimtLogin() } />
        <ActionsContainer>
          <TouchableTranslucentComponent title="Esqueci a minha senha" /> 
          <SeparatorComponent />
          <TouchableTranslucentComponent title="Politica de Privacidade" />
        </ActionsContainer>
      </WrapperContainer>
      <FooterContainer>
        <TouchableOutlineBorderlessComponent title='Entrar com o Celular' icons={[
        {
          location: 'left',
          name: 'cellphone-iphone',
          lib: 'materialCommunityIcons'
        }
      ]}  />
      </FooterContainer>
    </Container>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>

  )
}
