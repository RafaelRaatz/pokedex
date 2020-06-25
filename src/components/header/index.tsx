import React from 'react';
import { Container } from './styles';
import LogoImg from '../../media/pokedex.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LogoImg} alt="pokedex" />
    </Container>
  );
};

export default Header;
