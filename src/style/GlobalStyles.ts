import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inria Sans", sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul,
  ol {
    list-style: none;
  }
  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`
