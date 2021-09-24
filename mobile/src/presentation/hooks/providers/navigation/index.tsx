import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar, StatusBarStyle } from 'react-native';

export const NavigationProvider: React.FC = ({ children }) => {
  const theme = useTheme();

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.wrapper.primary,
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <StatusBar
        animated
        translucent
        barStyle={theme.colors.barStyle.main as StatusBarStyle}
        backgroundColor="transparent"
      />
      {children}
    </NavigationContainer>
  );
};
