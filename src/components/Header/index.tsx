import React from 'react';

import { AiOutlineExclamation } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

import lolIcon from '../../assets/lol-icon.png';
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

const randomRPValue = Math.floor(Math.random() * (50000 - 100) + 100);
const randomBPValue = Math.floor(Math.random() * (3000000 - 1000) + 1000);

const Header: React.FC = () => {
  return (
    <Container>
      <PlayButton>
        <IconLolImage url={lolIcon} />
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
          {randomRPValue}
        </span>
        <span>
          <img src={BPIcon} alt="shop" />
          {randomBPValue}
        </span>
      </UserCoins>
    </Container>
  );
};

export default Header;
