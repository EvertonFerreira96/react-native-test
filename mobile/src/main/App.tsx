import { ApplicationContextProviderManagement } from '../presentation/hooks/factory';
import React from 'react';
import { AuthenticationSignInScreen } from '../presentation/jsx/screens/authentication/sing-in';
import { Routes } from './routes/index.routes';
import { YellowBox } from 'react-native';

export const App: React.FC = () => {
  return (

    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  )
}
