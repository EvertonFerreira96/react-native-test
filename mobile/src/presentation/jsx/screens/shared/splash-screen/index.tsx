import React from 'react';
import { ActivityIndicator, Image } from 'react-native';

import { Container } from './styles';


interface SplashScreenProps {
    image?: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({image}) => {
  return (
      <Container>
        {image &&  <Image source={{uri: image}} resizeMode="contain"  style={{ width: 80, height:80, marginRight: 16}}/> }
         <ActivityIndicator size="large" />
      </Container>
  )
}
