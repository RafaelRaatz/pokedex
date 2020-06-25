import React, { useState, useEffect } from 'react';
import Header from './components/header/index';
import GlobalStyle from './styles/global';
import PokeArticle from './components/Article/index';
import { Container, Main, Row } from './styles';
import Api from './services/api';

interface PokemonProps {
  number: string;
  name: string;
  image: string;
  type: Array<any>;
}

const App: React.FC = () => {
  const getPokemons = async () => {
    const { data } = await Api.get('/pokemons');
    setPokemons(data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  pokemons.map((pokemon) => {
    return (
      <PokeArticle
        LabelText={pokemon.number}
        TitleText={pokemon.name}
        PokeImg={require(`${pokemon.image}`)}
        PokeType={pokemon.type}
      />
    );
  });

  return (
    <>
      <Header />

      <Main>
        <Container>
          <Row>
            <PokeArticle
              LabelText=""
              TitleText="Ivysaur"
              PokeImg={require('./media/002.png')}
              PokeType={['Grass', 'Poison']}
            />
          </Row>
        </Container>
      </Main>

      <GlobalStyle />
    </>
  );
};

export default App;
