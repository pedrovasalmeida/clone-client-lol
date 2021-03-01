import styled, { css } from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

interface LogOnProps {
  isDisabled?: boolean;
}

interface DialogProps {
  show?: boolean;
}

export const Container = styled.div`
  display: flex;
  position: relative;

  max-width: 100vw;
  max-height: 100vh;

  width: 100%;
  height: 100vh;
`;

export const UserLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 400px;

  background: #fdfcff;
  opacity: 0.98;

  > img {
    width: 40px;
    margin: 30px 0;

    pointer-events: none;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;

  margin: 10px 0;
  pointer-events: none;
`;

export const SocialLogin = styled.div``;

export const LogOn = styled.button<LogOnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  margin: 30px 0;

  border: 2px solid gray;
  border-radius: 15px;

  cursor: default;
  background: #eee;

  opacity: 0.2;

  transition: all 300ms ease;

  ${p =>
    p.isDisabled &&
    css`
      border: 2px solid #d43537;
      background: #d43537;
      opacity: 1;

      cursor: pointer;

      svg {
        color: #fff;
        transition: all 300ms ease;
      }
    `};
`;

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

export const QuestionIcon = styled(FaQuestionCircle)<DialogProps>`
  position: absolute;
  top: 30px;
  right: 20px;

  color: #e1e1e3;
`;

export const Dialog = styled.div`
  position: absolute;
  top: 10px;
  right: -244px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: #fff;

  width: 250px;
  height: 100px;

  padding: 15px;

  filter: drop-shadow(0 0 6px #000);

  > span {
    font-size: 14px;
    font-weight: bold;
  }

  ::before {
    content: '';
    display: flex;

    position: absolute;
    left: -10px;
    top: 17px;

    width: 20px;
    height: 20px;

    transform: rotate(45deg);

    background: #fff;
  }
`;
