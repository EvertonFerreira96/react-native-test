import React, { ReactNode } from 'react';

import { ThemeProvider } from '../providers/theme';
import { NavigationProvider } from '../providers/navigation';

interface ApplicationContextProviderManagementProps {
  children: ReactNode;
}

export const ApplicationContextProviderManagement: React.FC<ApplicationContextProviderManagementProps> =
  ({ children }) => {
    return (
      <ThemeProvider>
        <NavigationProvider>
           {children}
      </NavigationProvider>
      </ThemeProvider>
    );
  };
