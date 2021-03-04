import styled from 'styled-components';

import { lighten, shade } from 'polished';

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
    bottom: 12px;

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
  text-transform: uppercase;

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
  padding-top: 4px;

  > div {
    > svg {
      margin: 0 10px;
      color: #c3ab6d;
      cursor: pointer;

      &:hover {
        color: ${lighten(0.4, '#c3ab6d')};
      }
    }
  }
`;

export const Title = styled.span`
  color: #949592;

  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Friends = styled.div``;

export const FriendPhoto = styled.div``;

export const FriendNick = styled.div``;

export const FriendStatus = styled.div``;
