import React from 'react';
import { Article, Label, Title } from './styles';
import { LabelType } from './LabelType';

interface PokemonProps {
  LabelText: string;
  TitleText: string;
  PokeImg: string;
  PokeType: Array<any>;
}

const PokeArticle: React.FC<PokemonProps> = ({
  LabelText,
  TitleText,
  PokeImg,
  PokeType,
}) => {
  return (
    <>
      <Article>
        <img src={PokeImg} width="216px" height="180px" alt="" />
        <div>
          <Label>{LabelText}</Label>
          <Title>{TitleText} </Title>
        </div>
        {PokeType.map((item) => {
          return <LabelType type={item} />;
        })}
      </Article>
    </>
  );
};

export default PokeArticle;
