import React, {useState, useEffect} from 'react';
import { useTheme } from 'styled-components';


import { DynamicActionsHeaderModule } from '../../../modules/headers/dynamic-actions';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SearchTextInputComponent } from '../../../components/words/search';

import { Container, HeaderContainer, Feeds , SearchContainer, HeaderContent, WrapperContainer, FeedsProps } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';
import { LoadingProps, SplashScreen } from '../../shared/splash-screen';

import Data from './data.json'; 
import { TouchableListNewsComponent } from '../../../components/actions/touchables/list-news';
interface ISchoolsCollections {
  name: string;
  avatar: string;
  id: string; 
  contexto: string; 
}

interface ApplicationNewsScreenRouteParams {
  schools: ISchoolsCollections[]
}

export const ApplicationNewsScreen: React.FC = () => {
  const theme = useTheme(); 
  const {navigate} = useNavigation(); 
  const {params} = useRoute(); 
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState<LoadingProps>({
    state: false
  }); 

  const collection = Data.feed as unknown as FeedsProps[];  
  console.log()


  useEffect(() => {
    return () => {  } 
  })

  
    return( 
    !isLoading.state ? 

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
      <DynamicActionsHeaderModule 
      disable
      title="Teste Zero"
      size={38}
      icons={[
      ]} />
      
      </HeaderContainer>
      <WrapperContainer>
      <Feeds 
        data={collection}
        keyExtractor={item => String(item.idMensagem)} renderItem={({item})  =>
    
    <TouchableListNewsComponent  title={item.sumario} author={item.remetente} date={item.data}  avatar={item.openImagemUrl}  />
    
  } />
  </WrapperContainer>

    </Container>
    </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

: <SplashScreen image={isLoading.image} />

);
}
