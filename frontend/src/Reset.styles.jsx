import { createGlobalStyle } from 'styled-components';
import backgroundImg from './assets/background.png';

const ResetStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    background: url(${backgroundImg}) no-repeat center center fixed;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    text-rendering: optimizeSpeed;
    font-family: 'Inter', 'Poppins', 'Manrope', sans-serif;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  input,
  textarea {
    border: none;
    outline: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  legend {
    padding: 0;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  blockquote {
    margin: 0;
    padding: 0;
  }

  address {
    font-style: normal;
  }
`;

export default ResetStyles;
