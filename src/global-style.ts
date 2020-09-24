import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;  

    height: 100%;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
    box-shadow: inset 0 0 0px 1px var(--focus-color);
  }

  :root {
    --focus-color: #555;

    --z-index-bottom-bar: 100;
  }
`
