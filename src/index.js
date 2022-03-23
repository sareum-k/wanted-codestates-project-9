import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  line-height: 1.2;
  background-color: white;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #EEEEEE;
}
a {
  text-decoration:none;
  color:inherit;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);