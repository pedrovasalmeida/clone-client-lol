/** Packages */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../context/auth';

/** Pages */
import Login from '../pages/Login';
import Logged from './Logged';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <Logged /> : <Login />}</BrowserRouter>;
};

export default Routes;
