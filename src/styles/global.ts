import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}


  body{
    background: white;
    font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color:#1c1c1c;
  }

  a{
    text-decoration: none;
  }

`;
