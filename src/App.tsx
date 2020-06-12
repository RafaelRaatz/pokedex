import React from 'react';
import Header from './components/header/index';
import GlobalStyle from './styles/global';
import PokeArticle from './components/Article/index';
import { Container, Main, SmallNewsContainer } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <SmallNewsContainer>
            <PokeArticle LabelText="004" TitleText="Charmander" />

            <PokeArticle LabelText="004" TitleText="Charmander" />

            <PokeArticle LabelText="004" TitleText="Charmander" />

            <PokeArticle LabelText="004" TitleText="Charmander" />
          </SmallNewsContainer>
        </Container>
      </Main>

      <GlobalStyle />
    </>
  );
};

export default App;
