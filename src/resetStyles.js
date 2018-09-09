import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export default () => injectGlobal`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box
  }

  html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, dl,
  dt, dd, blockquote, address {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 1rem;
    font-style: normal;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;

    overflow-x: hidden;
  }
`
