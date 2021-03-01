/** Packages */
import React from 'react';

/** Components */
import Routes from './routes';
import { AuthProvider } from './context/auth';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
