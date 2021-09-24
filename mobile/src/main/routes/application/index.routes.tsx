import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticationSignInScreen } from '../../../presentation/jsx/screens/authentication/sing-in';

const { Navigator, Screen } = createStackNavigator();

export const ApplicationRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{
        headerShown: false
    }}>
              <Screen
        name="AuhtenticationSignIn"
        component={AuthenticationSignInScreen}
      />
    </Navigator>
  );
};
