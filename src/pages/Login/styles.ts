import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  max-width: 100vw;
  max-height: 100vh;

  width: 100%;
  height: 100vh;
`;

export const UserLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 400px;

  background-color: rgba(255, 255, 255, 0.96);

  > img {
    width: 40px;
    margin: 30px 0;
  }
`;

export const Title = styled.span`
  font-weight: bold;

  font-size: 20px;

  margin: 10px 0;
`;

export const SocialLogin = styled.div``;

export const KeepLogged = styled.div``;

export const LogOn = styled.div``;

export const Links = styled.div``;

export const Client = styled.div``;

export const Notify = styled.div``;

export const Settings = styled.div``;

export const Background = styled.div`
  display: flex;
  position: absolute;
  left: 0;

  height: 100vh;

  z-index: -1;

  img {
    object-fit: cover;
    width: 100%;
  }
`;
