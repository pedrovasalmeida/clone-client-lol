/** Packages */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/** Components */
import Routes from './routes';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
