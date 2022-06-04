import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  body {
    font-family: Pretendard;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul, li {
    list-style: none;
  }
  
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }

  input,
  select,
  button {
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  a, button {
    cursor: pointer;
  }

  pre {
    white-space: pre-line;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  :root {
    --compo-primary: #00C092;
    --compo-primary-press : #0AA882;
    --compo-secondary: #F7F9F8;
    --compo-line: #e5e5e5;
    --compo-dim:#d5d5d5;
    --compo-red :#F85151; 
    --compo-blue : #0085FF;

    // text
    --text-333 : #333333;
    --text-555: #555555;
    --text-777 : #777777;
    --text-999: #999999;
    --text-disabled: #d5d5d5;
    --text-green : #00B98D;
    --text-red :#F85151; 
    --text-blue : #0085FF;
    --text-dim: #d5d5d5;

    // 공통
    --white :#ffffff;
    --black :#000000;
    --gray: #D3D3D3;
    --blue : #3178C6;
    --deepGray : #7C8986;
    --lightGray:#EEF1F1;
    --green :#00C092;
  }
`;
export default GlobalStyles;