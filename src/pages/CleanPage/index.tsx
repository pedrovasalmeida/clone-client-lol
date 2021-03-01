/** Packages */
import React from 'react';
import { useAuth } from '../../context/auth';

/** My Components */
import { Container } from './styles';

const CleanPage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <h1>Main page</h1>
      <span>Logado como:</span>
      <span>{user}</span>

      <button type="button" onClick={signOut}>
        <span>Deslogar</span>
      </button>
    </Container>
  );
};

export default CleanPage;
