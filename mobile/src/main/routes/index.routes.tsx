import * as React from 'react';
import { useEffect } from 'react';
import { ApplicationRoutes } from './application/index.routes';
import { AuthenticationRoutes } from './authentication/index.routes';

export const Routes: React.FC = () => {
  const profile  = false

  return profile  ? <ApplicationRoutes /> : <AuthenticationRoutes />;
};
