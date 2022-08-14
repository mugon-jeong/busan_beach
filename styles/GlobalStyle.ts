import { css } from '@emotion/react';

export const GlobalStyle = css`
  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    line-height: 1.6;
    font-weight: 400;
    h1 {
      line-height: 1;
    }
    background: radial-gradient(#61c2a1, #0b90ad);
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #f0f0f0;
    border-radius: 12px;
  }
`;
