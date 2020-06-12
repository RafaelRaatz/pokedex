import React, { useState } from 'react';
import { Article, Label, Title, Text } from './styles';
import LogoImg from '../../midia/charmander.png';

interface RepositoryPokemon {
  LabelText: number;
  TitleText: string;
}

const PokeArticle: React.FC = () => {
  const [RepositoryPokemon] = useState<RepositoryPokemon | null>(null);

  return (
    <>
      <Article>
        <img src={LogoImg} width="216px" height="180px" alt="" />
        <div>
          <Label>{RepositoryPokemon.LabelText}</Label>
          <Title>{RepositoryPokemon.TitleText} </Title>
        </div>
      </Article>
    </>
  );
};

export default PokeArticle;
