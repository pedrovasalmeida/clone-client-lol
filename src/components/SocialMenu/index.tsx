/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import { BsQuestion, BsListUl } from 'react-icons/bs';
import { FaWindowMinimize } from 'react-icons/fa';
import { IoIosSettings, IoMdClose } from 'react-icons/io';
import { RiUserAddLine, RiSearchLine, RiArrowDownSFill } from 'react-icons/ri';
import { AiFillFolderAdd } from 'react-icons/ai';

import UserPhotoImg from '../../assets/user-photo.png';
import UserBorder from '../../assets/user-xp-border.png';
import UserBorderHover from '../../assets/user-xp-border-hover.png';

import { useAuth } from '../../context/auth';

import {
  Container,
  WindowButtons,
  UserData,
  UserPhoto,
  Data,
  Nick,
  Status,
  Social,
  Buttons,
  Title,
  FriendsList,
  Friend,
  FriendPhoto,
} from './styles';

const friends = [
  {
    photo: '#',
    nick: 'VICENTE DO CORRE',
    status: 'Online',
  },
  {
    photo: '#',
    nick: 'REGINALDO PRATATI',
    status: 'Em partida',
  },
  {
    photo: '#',
    nick: 'vinagrete',
    status: 'Em partida',
  },
  {
    photo: '#',
    nick: '[WL] Death Reaper',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'InCripter',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'YoDaSL',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'OMG Jukera?',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'Hide on bush',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'jean magro',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'KaMiGoD',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'éogrongos',
    status: 'Offline',
  },
  {
    photo: '#',
    nick: 'takeshi',
    status: 'Offline',
  },
];

const SocialMenu: React.FC = () => {
  const [photoIsHovered, setPhotoIsHovered] = useState(false);
  const { user } = useAuth();

  return (
    <Container>
      <WindowButtons>
        <BsQuestion size={15} />
        <FaWindowMinimize size={15} />
        <IoIosSettings size={15} />
        <IoMdClose size={15} />
      </WindowButtons>

      <UserData>
        <UserPhoto
          onMouseEnter={() => setPhotoIsHovered(true)}
          onMouseLeave={() => setPhotoIsHovered(false)}
        >
          {photoIsHovered ? (
            <img
              src={UserBorderHover}
              alt="user border"
              className="user-border"
            />
          ) : (
            <img src={UserBorder} alt="user border" className="user-border" />
          )}
          <img src={UserPhotoImg} alt="user border" className="user-photo" />
          <span>230</span>
        </UserPhoto>
        <Data>
          <Nick>{user}</Nick>
          <Status>
            <div />
            some status here
          </Status>
        </Data>
      </UserData>

      <Social>
        <Buttons>
          <Title>Social</Title>

          <div>
            <RiUserAddLine size={20} />
            <AiFillFolderAdd size={20} />
            <BsListUl size={20} />
            <RiSearchLine size={20} />
          </div>
        </Buttons>

        <FriendsList>
          <Title className="friends-list-title">
            <RiArrowDownSFill size={20} />
            Geral (3/{friends.length})
          </Title>
          {friends.map(friend => (
            <Friend key={friend.nick} status={friend.status}>
              <FriendPhoto />
              <div className="friend-status">
                <span>{friend.nick}</span>
                <p>{friend.status}</p>
              </div>
            </Friend>
          ))}
        </FriendsList>
      </Social>
    </Container>
  );
};

export default SocialMenu;
