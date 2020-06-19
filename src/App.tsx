import React from 'react';
import Header from './components/header/index';
import GlobalStyle from './styles/global';
import PokeArticle from './components/Article/index';
import { Container, Main, Row } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <Row>
            <PokeArticle
              LabelText="N°001"
              TitleText="Bulbasaur"
              PokeImg={require('./midia/001.png')}
              PokeType={['Grass', 'Poison']}
            />

            <PokeArticle
              LabelText="N°002"
              TitleText="Ivysaur"
              PokeImg={require('./midia/002.png')}
              PokeType={['Grass', 'Poison']}
            />

            <PokeArticle
              LabelText="N°003"
              TitleText="Venosaur"
              PokeImg={require('./midia/003.png')}
              PokeType={['Grass', 'Poison']}
            />

            <PokeArticle
              LabelText="N°004"
              TitleText="Charmander"
              PokeImg={require('./midia/004.png')}
              PokeType={['Fire']}
            />
          </Row>
        </Container>

        <Container>
          <Row>
            <PokeArticle
              LabelText="N°005"
              TitleText="Charmeleon"
              PokeImg={require('./midia/005.png')}
              PokeType={['Fire']}
            />

            <PokeArticle
              LabelText="N°006"
              TitleText="Charizard"
              PokeImg={require('./midia/006.png')}
              PokeType={['Fire', 'Flying']}
            />

            <PokeArticle
              LabelText="N°007"
              TitleText="Squirtle"
              PokeImg={require('./midia/007.png')}
              PokeType={['Water']}
            />

            <PokeArticle
              LabelText="N°008"
              TitleText="Wartortle"
              PokeImg={require('./midia/008.png')}
              PokeType={['Water']}
            />
          </Row>
        </Container>
      </Main>

      <GlobalStyle />
    </>
  );
};

export default App;
