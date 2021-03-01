/** Packages */
import React from 'react';
import Login from '../pages/Login';

/** Pages */
import { useAuth } from '../context/auth';

import Logged from './Logged';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user ? <Logged /> : <Login />;
};

export default Routes;
