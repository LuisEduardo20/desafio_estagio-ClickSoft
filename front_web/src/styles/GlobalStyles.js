import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    min-height: 100vh;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f8f8ff;
  }
`;

export default GlobalStyles;