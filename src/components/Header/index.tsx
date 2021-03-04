import React, { useState } from 'react';

import { AiOutlineExclamation } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

import lolIcon from '../../assets/lol-icon.png';
import lolIconHover from '../../assets/lol-icon-hover.png';
import BagIcon from '../../assets/bag.png';
import EspoliosIcon from '../../assets/espolios.png';
import UserShopIcon from '../../assets/user-shop.png';
import ShopIcon from '../../assets/shop.png';
import RPIcon from '../../assets/riot-points.png';
import BPIcon from '../../assets/blue-essence.png';

import {
  Container,
  PlayButton,
  IconLolImage,
  WarningIcon,
  NavigateButtons,
  UserButtons,
  Separator,
  UserCoins,
} from './styles';

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <PlayButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <IconLolImage url={isHovered ? lolIconHover : lolIcon} />
        <span>JOGAR</span>
      </PlayButton>
      <WarningIcon>
        <AiOutlineExclamation size={25} />
      </WarningIcon>
      <NavigateButtons>
        <span>Inicio</span>
        <p>TFT</p>
        <p>Clash</p>
      </NavigateButtons>

      <UserButtons>
        <div>
          <FaUserCircle size={25} />
        </div>
        <div>
          <img src={BagIcon} alt="bag" />
        </div>
        <div>
          <img src={EspoliosIcon} alt="espolios" />
        </div>
        <div>
          <img src={UserShopIcon} alt="user shop" />
        </div>
        <div>
          <img src={ShopIcon} alt="shop" />
        </div>
      </UserButtons>

      <Separator />

      <UserCoins>
        <span>
          <img src={RPIcon} alt="shop" />
          {Math.floor(Math.random() * (50000 - 100) + 100)}
        </span>
        <span>
          <img src={BPIcon} alt="shop" />
          {Math.floor(Math.random() * (3000000 - 1000) + 1000)}
        </span>
      </UserCoins>
    </Container>
  );
};

export default Header;
