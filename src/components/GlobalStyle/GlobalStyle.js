import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import '~node_modules/modern-normalize/modern-normalize.css';

body {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  box-sizing: border-box;
  overflow-x: hidden;
}

html,
body {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
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

export default GlobalStyle;
