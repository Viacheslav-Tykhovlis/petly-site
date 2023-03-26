import { css } from '@emotion/react';

export const GlobalStyles = css`
  body {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #fdf7f2;
  }

  html,
  body {
    height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  td {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    cursor: pointer;
  }
`;
