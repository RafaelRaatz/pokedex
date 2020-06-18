import styled from 'styled-components';

export const Article = styled.article`
  width: 216px;
`;
export const Label = styled.span`
  text-transform: uppercase;
  color: #a9a9a9;
  font-weight: bold;
  font-size: 0.8em;
`;

export const Title = styled.p`
  margin-top: 10px;
  color: #c0c0c0;
  font-size: 1.1em;
  margin-bottom: 2px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 0.9em;
  line-height: 17px;
  color: black;
`;

interface TypeProps {
  backgroundColor: string;
}

const getBackgroundColor = ({ backgroundColor }: TypeProps) => {
  return backgroundColor || 'red';
};

export const Type = styled.span`
  display: flex;
  justify-content: center;
  background: green;
  border-radius: 5px;
  max-width: 100px;
  margin-right: 2px;
  margin-top: 5px;
  width: 40%;
  text-transform: none;
  font-size: 0.8em;
  background-color: ${getBackgroundColor};
`;
