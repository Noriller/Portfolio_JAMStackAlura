/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    font-family: 'Fira Sans', 'Fira Sans Condensed', 'sans-serif';
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.textContrast};
  }
`;
