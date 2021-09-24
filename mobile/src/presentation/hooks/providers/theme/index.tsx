import React, { ReactNode } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components/native';

import { themes } from '../../../../presentation/styles/themes';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = themes.light;

  return (
    <StyledProvider theme={theme}>
        {children}
    </StyledProvider>
  );
};
