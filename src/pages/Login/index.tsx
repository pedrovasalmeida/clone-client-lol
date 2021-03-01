import React, { useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
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
  WarningMessage,
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
            <span>Clone criado por Pedro Henrique.</span>
          </Dialog>
        )}

        <QuestionIcon
          size={20}
          onMouseEnter={() => setShowDialog(true)}
          onMouseLeave={() => setShowDialog(false)}
          show={showDialog}
        />

        <img src={Logo} alt="Logo LoL" />
        <Title>Fazer Login</Title>
        <Input text="Nome de usuário" />

        <SocialLogin>
          <span className="facebook">
            <FaFacebook size={20} />
          </span>
          <span className="google">
            <FcGoogle size={20} />
          </span>
          <span className="apple">
            <FaApple size={20} />
          </span>
        </SocialLogin>

        <WarningMessage>
          Utilize um nome de usuário ficticio. Esse site não tem quaisquer
          vínculos com o League of Legends ou a Riot Games e seu único objetivo
          é a prática do desenvolvimento front-end!
        </WarningMessage>

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

        <Links>
          <span>Não consegue iniciar sessão?</span>

          <span>Criar conta</span>
          <div>
            <span className="enabled">v1.0.0</span>
          </div>
        </Links>
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
