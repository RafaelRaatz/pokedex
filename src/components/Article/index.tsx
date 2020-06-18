import React from 'react';
import { Article, Label, Title, Type } from './styles';

interface PokemonProps {
  LabelText: string;
  TitleText: string;
  PokeImg: string;
  TypeColor: string;
  PokeType: string;
}

const PokeArticle: React.FC<PokemonProps> = ({
  LabelText,
  TitleText,
  PokeImg,
  PokeType,
  TypeColor,
}) => {
  return (
    <>
      <Article>
        <img src={PokeImg} width="216px" height="180px" alt="" />
        <div>
          <Label>{LabelText}</Label>
          <Title>{TitleText} </Title>
        </div>
        <div>
          <Type backgroundColor={TypeColor}>{PokeType}</Type>
        </div>
      </Article>
    </>
  );
};

export default PokeArticle;
