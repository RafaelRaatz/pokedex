import React from 'react';
import styled from 'styled-components';

interface TypeProps {
  type: string;
}

const getBackgroundColor = ({ type }: TypeProps) => {
  const colors: any = {
    Grass: '#00a86b',
    Fire: '#ed9121',
    Water: '#81c7db',
    Flying: '#BFEFFF',
    Poison: '#b97fc9',
  };

  return colors[type] || 'red';
};

export const TypeBox = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  max-width: 100px;
  margin-right: 2px;
  margin-top: 5px;
  width: 40%;
  text-transform: none;
  font-size: 0.8em;
  background-color: ${getBackgroundColor};
`;

export const LabelType: React.FC<TypeProps> = ({ type }) => {
  return (
    <>
      <TypeBox type={type}>{type}</TypeBox>
    </>
  );
};
