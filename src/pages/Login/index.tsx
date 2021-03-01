import React, { useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import Logo from '../../assets/logo-lol.svg';
import Wallpaper from '../../assets/wallpaper-client.jpg';

import Input from '../../components/Input';
import { useAuth } from '../../context/auth';

import {
  Container,
  UserLogin,
  Title,
  SocialLogin,
  LogOn,
  Links,
  Client,
  Notify,
  Settings,
  Background,
  QuestionIcon,
  Dialog,
} from './styles';

const Login: React.FC = () => {
  const { signIn, userDataFromInput } = useAuth();

  const [showDialog, setShowDialog] = useState(false);

  return (
    <Container>
      <UserLogin>
        {showDialog && (
          <Dialog
            onMouseEnter={() => setShowDialog(true)}
            onMouseLeave={() => setShowDialog(false)}
          >
            <span>Clone criado por Pedro H. usando ReactJS</span>
          </Dialog>
        )}

        <QuestionIcon
          size={20}
          onMouseEnter={() => setShowDialog(true)}
          onMouseLeave={() => setShowDialog(false)}
          show={showDialog}
        />
        <img src={Logo} alt="Logo LoL" />
        <Title>Fazer login</Title>
        <Input text="Nome de usuário" />

        <LogOn
          type="button"
          isDisabled={userDataFromInput.length > 1}
          onClick={
            () =>
              userDataFromInput.length > 1 ? signIn(userDataFromInput) : ''
            // eslint-disable-next-line react/jsx-curly-newline
          }
        >
          <FiArrowRight size={40} />
        </LogOn>

        <Links />
      </UserLogin>

      <Client>
        <Notify />
        <Settings />
      </Client>
      <Background>
        <img src={Wallpaper} alt="Wallpaper" />
      </Background>
    </Container>
  );
};

export default Login;
