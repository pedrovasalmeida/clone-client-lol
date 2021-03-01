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
  max-width: 400px;

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
  font-size: 26px;
  font-variant: small-caps;
  font-feature-settings: 'pnum' on, 'onum' on;

  margin: 10px 0;
  margin-bottom: 20px;
  pointer-events: none;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 40px;

  margin: 10px 0;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .facebook {
    background: #1878f3;
    margin: 0 auto;
    width: 32%;
    height: 90%;
    color: #fff;
    border-radius: 4px;

    &:hover {
      background: #1166d4;
    }
  }

  .google {
    background: #fff;
    margin: 0 auto;
    width: 32%;
    height: 90%;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:hover {
      background: #eee;
    }
  }

  .apple {
    background: #000;
    margin: 0 auto;
    width: 32%;
    height: 90%;
    color: #fff;
    border-radius: 4px;

    &:hover {
      background: #222;
    }
  }
`;

export const WarningMessage = styled.span`
  font-weight: 700;
  font-size: 18px;
  font-variant: small-caps;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: #d43537;

  padding: 0 40px;
`;

export const LogOn = styled.button<LogOnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  margin-top: 60px;
  margin-bottom: 100px;

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

export const Links = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;

    color: #ccc;

    margin: 5px 0;

    cursor: default;

    &.enabled {
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }

    &.disabled {
      pointer-events: none;
    }
  }

  > div {
    display: flex;

    > span {
      position: absolute;
      right: -50px;
      bottom: 0;
    }
  }
`;

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
  border-radius: 4px;

  width: 250px;
  min-height: 50px;
  height: auto;

  padding: 15px;

  filter: drop-shadow(0 0 6px #000);

  > span {
    font-variant: small-caps;
    font-feature-settings: 'pnum' on, 'onum' on;
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

export const VersionDialog = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.9);
`;

export const InsideVersionDialog = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  padding: 30px;

  border-radius: 4px;
  background: #000;

  width: 450px;
  height: 270px;

  > svg {
    position: absolute;
    top: 28px;
    right: 20px;
    color: #fff;

    cursor: pointer;
  }

  > span,
  p {
    font-weight: bold;
    font-size: 26px;
    color: #fff;
  }

  > p {
    font-weight: 400;
    font-size: 18px;
    margin: 40px 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 110px;

      font-size: 16px;
      font-weight: bold;
      padding: 10px;

      color: #000;
      background: #1878f3;

      border-radius: 4px;

      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #ddd;
        background: #3b8ef7;
      }
    }
  }
`;
