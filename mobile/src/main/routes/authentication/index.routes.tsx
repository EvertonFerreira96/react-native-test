import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticationSignInScreen } from '../../../presentation/jsx/screens/authentication/sing-in';
import { ApplicationHomeScreen } from '../../../presentation/jsx/screens/application/home';

const { Navigator, Screen } = createStackNavigator();

export const AuthenticationRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{
        headerShown: false
    }}>
              <Screen
        name="SignIn"
        component={AuthenticationSignInScreen}
      />
                    <Screen
        name="Home"
        component={ApplicationHomeScreen}
      />
    </Navigator>
  );
};
