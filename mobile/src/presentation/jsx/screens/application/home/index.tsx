import React, {useState, useEffect} from 'react';

import { useTheme } from 'styled-components';


import { DynamicActionsHeaderModule } from '../../../modules/headers/dynamic-actions';
import { TouchableFilledBorderlessComponent } from '../../../components/actions/touchables/borderless/filled';
import { TouchableTranslucentComponent } from '../../../components/actions/touchables/translucent';
import { SeparatorComponent } from '../../../components/separator';

import { TouchableOutlineBorderlessComponent } from '../../../components/actions/touchables/borderless/outline';
import TextInputComponent from '../../../components/words/text-inputs';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SearchTextInputComponent } from '../../../components/words/search';
import axios from 'axios';  

import { Container, HeaderContainer, SchoolsContainer , SearchContainer, HeaderContent, WrapperContainer } from './styles';
import { AxiosHttpClient } from '@/infra/http';
import { useNavigation, useRoute } from '@react-navigation/core';
import { TouchableListCardComponent } from '../../../components/actions/touchables/list-card';


interface ISchoolsCollections {
  name: string;
  avatar: string;
  id: string; 
  contexto: string; 
}

interface ApplicationHomeScreenRouteParams {
  schools: ISchoolsCollections[]
}

export const ApplicationHomeScreen: React.FC = () => {
  const theme = useTheme(); 
  const {navigate} = useNavigation(); 
  const {params} = useRoute(); 
  const [searchText, setSearchText] = useState('');
  const {schools} = params as ApplicationHomeScreenRouteParams; 


  const collection = schools.filter(item => item.contexto.toUpperCase().includes(searchText.toUpperCase()) || item.name.toUpperCase().includes(searchText.toUpperCase()))

  const handleChoiseScholl = async (item: ISchoolsCollections) => {


  }

  useEffect(() => {
    return () => { schools.splice(0, schools.length);  collection.splice(0, schools.length) } 
  })

  return( 
    <KeyboardAvoidingView
    behavior='position'
    keyboardVerticalOffset={-RFPercentage(60)}
    enabled
  >
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
    <Container>
      <HeaderContainer>
        <HeaderContent>
      <DynamicActionsHeaderModule 
      title="Selecione a sessão principal"
      size={38}
      icons={[
      ]} />
      
      </HeaderContent>
      <SearchContainer>
        <SearchTextInputComponent placeholder="Buscar" onChangeText={(e) => setSearchText(e)} />

      </SearchContainer>
      </HeaderContainer>
      <WrapperContainer>
      <SchoolsContainer data={collection} keyExtractor={(item) => item.id} renderItem={({item})  =>
    
    <TouchableListCardComponent  title={item.name} subTitle={item.contexto} avatar={item.avatar} iconType="chevron-right" onPress={() => handleChoiseScholl(item)} />
    
  } />
  </WrapperContainer>

    </Container>
    </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
}
