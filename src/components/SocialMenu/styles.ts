import styled, { css } from 'styled-components';

import { lighten, shade } from 'polished';

interface FriendsProps {
  status: string;
}

export const Container = styled.div`
  position: relative;
  width: 350px;
  max-width: 350px;
  height: 100vh;

  overflow: hidden;

  background: #010913;

  color: #fff;
`;

export const WindowButtons = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;

  color: #989b93;

  > svg {
    cursor: pointer;
    margin: 0 10px;
  }
`;

export const UserData = styled.div`
  display: flex;

  max-height: 100px;
  height: 100px;
  min-height: 100px;

  border-bottom: 1px solid rgba(178, 170, 142, 0.4);
  border-top: 4px solid #725b2d;
`;

export const UserPhoto = styled.div`
  position: relative;
  padding-left: 10px;
  padding-top: 10px;

  cursor: pointer;

  img.user-border {
    position: relative;
    z-index: 1;
    width: 75px;
  }

  img.user-photo {
    position: absolute;
    left: 18px;
    top: 18px;

    border-radius: 50%;

    width: 60px;
  }

  > span {
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    left: 38px;
    bottom: 8px;

    color: #989b93;

    z-index: 1;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: auto;
  margin-left: 15px;
`;

export const Nick = styled.span`
  font-weight: bold;
  font-size: 18px;

  width: 180px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #e2d8c7;

  cursor: pointer;
  pointer-events: none;
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  width: 180px;

  color: #7c817b;
  padding-top: 2px;

  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
  pointer-events: none;

  > div {
    width: 10px;
    height: 10px;

    margin-right: 5px;

    background: #010913;
    border: 2px solid ${shade(0.5, 'red')};
    border-radius: 50%;
  }
`;

export const Social = styled.div`
  padding: 0 10px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 8px 0;

  > div {
    > svg {
      margin: 0 8px;
      color: #c3ab6d;
      cursor: pointer;

      &:hover {
        color: ${lighten(0.4, '#c3ab6d')};
      }
    }
  }
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: #949592;

  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &.friends-list-title {
    margin-bottom: 20px;

    > svg {
      margin-right: 5px;
    }
  }
`;

export const FriendsList = styled.div`
  padding-top: 10px;
`;

export const Friend = styled.div<FriendsProps>`
  display: flex;

  padding: 9px 5px;

  cursor: pointer;

  transition: all 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  div.friend-status {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 10px;
  }

  > div.friend-status {
    transition: all 200ms ease;
    ${p =>
      p.status === 'Offline' &&
      css`
        color: #4a4d54;

        &:hover {
          color: #92938c;
        }
      `}

    ${p =>
      p.status === 'Em partida' &&
      css`
        > span {
          color: #979a9a;
        }

        &:hover {
          > span {
            color: ${lighten(0.2, '#979a9a')};
          }
        }

        color: #1796a9;
      `}

    ${p =>
      p.status === 'Online' &&
      css`
        > span {
          color: #979a9a;
        }
        color: green;

        &:hover {
          > span {
            color: ${lighten(0.2, '#979a9a')};
          }
        }
      `}

    > p {
      font-size: 14px;
    }
  }
`;

export const FriendPhoto = styled.div`
  position: relative;

  width: 40px;
  height: 40px;
  background: #010913;
  border-radius: 50%;

  border: 2px solid #c3ab6d;

  &::before {
    content: '';
    display: block;

    position: absolute;
    right: -5px;
    bottom: 2px;
    width: 12px;
    height: 12px;

    border: 2px solid #010913;

    background: gray;
    border-radius: 50%;
  }

  &::after {
    content: '';
    display: block;

    position: absolute;
    right: 0;
    bottom: 7px;
    width: 5px;
    height: 5px;

    background: #010913;
    border-radius: 50%;
  }
`;
