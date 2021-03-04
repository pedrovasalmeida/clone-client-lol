/** Packages */
import React from 'react';
import { useAuth } from '../../context/auth';

/** My Components */
import Header from '../../components/Header';

import { Container, Wrapper } from './styles';

const HomePage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Home page</h1>
        <span>Logado como:</span>
        <span>{user}</span>

        <button type="button" onClick={signOut}>
          <span>Deslogar</span>
        </button>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
