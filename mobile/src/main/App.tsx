import { ApplicationContextProviderManagement } from '../presentation/hooks/factory';
import React from 'react';
import { AuthenticationSignInScreen } from '../presentation/jsx/screens/authentication/sing-in';
import { Routes } from './routes/index.routes';

export const App: React.FC = () => {
  console.disableYellowBox = true
  return (

    

    <ApplicationContextProviderManagement>
      <Routes />
    </ApplicationContextProviderManagement>
  )
}
