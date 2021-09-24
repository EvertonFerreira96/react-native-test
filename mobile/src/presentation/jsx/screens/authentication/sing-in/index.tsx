import { DynamicActionsHeaderModule } from '../../../modules/headers/dynamic-actions';
import React from 'react';

import { useTheme } from 'styled-components';
import { TouchableFilledBorderlessComponent } from '../../../components/actions/touchables/borderless/filled';
import { TouchableTranslucentComponent } from '../../../components/actions/touchables/translucent';
import { SeparatorComponent } from '../../../components/separator';

import { Container, HeaderContainer, WrapperContainer, FooterContainer, AuthenticationContainer, ActionsContainer, Title,  } from './styles';
import { TouchableOutlineBorderlessComponent } from '../../../components/actions/touchables/borderless/outline';
import TextInputComponent from '../../../components/words/text-inputs';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

export const AuthenticationSignInScreen: React.FC = () => {
  const theme = useTheme(); 
  return (

    <KeyboardAvoidingView
    testID="sign-in-screen"
    behavior={ 'position'}
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
          <TouchableFilledBorderlessComponent title="Entrar" background={theme.colors.secondary.natural}  color={theme.colors.primary.natural}  />
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

  )
}
