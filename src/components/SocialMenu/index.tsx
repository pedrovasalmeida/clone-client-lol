import React, { useState } from 'react';

import { BsQuestion, BsListUl, BsSearch } from 'react-icons/bs';
import { FaWindowMinimize } from 'react-icons/fa';
import { IoIosSettings, IoMdClose } from 'react-icons/io';
import { RiUserAddLine } from 'react-icons/ri';
import { AiFillFolderAdd } from 'react-icons/ai';

import UserPhotoImg from '../../assets/user-photo.png';
import UserBorder from '../../assets/user-xp-border.png';
import UserBorderHover from '../../assets/user-xp-border-hover.png';

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
  Friends,
  FriendPhoto,
  FriendNick,
  FriendStatus,
} from './styles';

const SocialMenu: React.FC = () => {
  const [photoIsHovered, setPhotoIsHovered] = useState(false);

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
          <Nick>VICENTE DO CORRE AEAEAE ADASWEDAEA</Nick>
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
            <AiFillFolderAdd size={22} />
            <BsListUl size={20} />
            <BsSearch size={20} />
          </div>
        </Buttons>
        <Friends>
          <FriendPhoto />
          <FriendNick />
          <FriendStatus />
        </Friends>
      </Social>
    </Container>
  );
};

export default SocialMenu;
