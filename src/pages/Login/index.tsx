import React from 'react';

import Logo from '../../assets/logo-lol.svg';
import Wallpaper from '../../assets/wallpaper-client.jpg';

import Input from '../../components/Input';

import {
  Container,
  UserLogin,
  Title,
  SocialLogin,
  KeepLogged,
  LogOn,
  Links,
  Client,
  Notify,
  Settings,
  Background,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <UserLogin>
        <img src={Logo} alt="Logo LoL" />
        <Title>Fazer login</Title>
        <Input text="Nome de usuário" />
        {/* <Input text="senha" /> */}

        <SocialLogin />
        <KeepLogged />
        <LogOn />

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
