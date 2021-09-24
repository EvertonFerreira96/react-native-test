import React from 'react';
import { ActivityIndicator, Image } from 'react-native';

import { Container } from './styles';
export interface LoadingProps
{
    state: Boolean,
    image?: string
  }
interface SplashScreenProps {
    image?: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({image}) => {
  return (
      <Container>
        {image &&  <Image source={{uri: image}} resizeMode="contain"  style={{ width: 240, height:240, marginRight: 16, marginVertical: 32}}/>}
         <ActivityIndicator size="large" />
      </Container>
  )
}
