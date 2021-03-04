import styled from 'styled-components';

import { shade, lighten } from 'polished';

import { RiErrorWarningFill } from 'react-icons/ri';

import PlayButtonBg from '../../assets/play-button.png';
import PlayButtonHover from '../../assets/play-button-hover.png';

interface IconLolProps {
  url: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 100px;
  height: 100px;

  padding: 0 30px;

  border-bottom: 1px solid rgba(178, 170, 142, 0.4);
  border-top: 4px solid #725b2d;
`;

export const PlayButton = styled.div`
  position: relative;
  background: url(${PlayButtonBg});
  background-size: 100%;
  background-repeat: no-repeat;

  height: 71px;
  width: 228px;

  transition: all 300ms ease;

  cursor: pointer;

  &:hover {
    background: url(${PlayButtonHover});
  }

  > span {
    position: absolute;
    left: 105px;
    top: 22px;

    color: #c8c1b2;
    font-weight: bold;
    font-size: 18px;

    pointer-events: none;
  }

  > img {
    transition: all 300ms ease;

    position: absolute;
    left: 5px;
    top: 5px;
    width: 60px;
  }
`;

export const IconLolImage = styled.div<IconLolProps>`
  position: absolute;
  left: 5px;
  top: 5px;
  width: 60px;

  background: url(${p => p.url});
  background-size: 100%;
  background-repeat: no-repeat;

  width: 60px;
  height: 60px;

  transition: all 300ms ease;
`;

export const WarningIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 10px;

  width: 35px;
  height: 35px;

  background: #90172b;
  border-radius: 50%;

  cursor: pointer;

  transition: all 300ms ease;

  > svg {
    position: absolute;
    color: #fff;
  }

  &:hover {
    background: #a81830;
  }

  &::after {
    content: '';

    width: 25px;
    height: 25px;

    background: #90172b;
    border: 2px solid #333;
    border-radius: 50%;

    transition: all 300ms ease;
  }

  &:hover::after {
    background: #a81830;
  }
`;

export const NavigateButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  margin: 0 5px;

  transition: all 300ms ease;

  > span,
  p {
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-weight: bold;
    color: #b2aa8e;

    min-width: 70px;
    height: 100%;

    padding: 0 25px;
    background: linear-gradient(
      to top,
      rgba(178, 170, 142, 0.4),
      transparent,
      transparent
    );

    cursor: pointer;

    transition: all 300ms ease;
  }

  > p {
    color: rgba(178, 170, 142, 0.3);
    cursor: not-allowed;
    background: linear-gradient(
      to top,
      rgba(178, 170, 142, 0.1),
      transparent,
      transparent
    );

    &:hover {
      background: linear-gradient(
        to top,
        rgba(178, 170, 142, 0.4),
        transparent,
        transparent
      );
    }
  }
`;

export const UserButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 20px;
  margin-left: auto;

  color: #cebc94;
  height: 100%;

  > div img,
  svg {
    margin: 0 20px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    height: 100%;

    background: linear-gradient(
      to top,
      rgba(178, 170, 142, 0),
      transparent,
      transparent
    );

    &:hover {
      background: linear-gradient(
        to top,
        rgba(178, 170, 142, 0.4),
        transparent,
        transparent
      );
    }
  }

  > img {
    width: 30px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 80%;

  border-radius: 50%;

  background: rgba(178, 170, 142, 0.5);
  filter: drop-shadow(0 2px 2px #f7c452);
`;

export const UserCoins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: #cebc94;

  > span,
  img {
    font-weight: bold;
    font-size: 18px;
    margin: 0 10px;
  }

  > span img {
    width: 20px;
  }
`;
