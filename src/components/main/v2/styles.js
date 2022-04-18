import { createGlobalStyle } from "styled-components"
import FuturaBTBoldEOT from "../../assets/fonts/FuturaBT-Bold.eot"
import FuturaBTBoldWOFF2 from "../../assets/fonts/FuturaBT-Bold.woff2"
import FuturaBTBoldWOFF from "../../assets/fonts/FuturaBT-Bold.woff"
import FuturaBTBoldTTF from "../../assets/fonts/FuturaBT-Bold.ttf"
import FuturaBTMediumEOT from "../../assets/fonts/FuturaBT-Medium.eot"
import FuturaBTMediumWOFF2 from "../../assets/fonts/FuturaBT-Medium.woff2"
import FuturaBTMediumWOFF from "../../assets/fonts/FuturaBT-Medium.woff"
import FuturaBTMediumTTF from "../../assets/fonts/FuturaBT-Medium.ttf"
import FuturaBTBookEOT from "../../assets/fonts/FuturaBT-Book.eot"
import FuturaBTBookWOFF2 from "../../assets/fonts/FuturaBT-Book.woff2"
import FuturaBTBookWOFF from "../../assets/fonts/FuturaBT-Book.woff"
import FuturaBTBookTTF from "../../assets/fonts/FuturaBT-Book.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura BT-Bold';
    src:
      url(${FuturaBTBoldEOT}) format('embedded-opentype'),
      url(${FuturaBTBoldWOFF2}) format('woff2'),
      url(${FuturaBTBoldWOFF}) format('woff'),
      url(${FuturaBTBoldTTF}) format('truetype');
      font-weight: normal;
    font-style: normal;
  }

  @font-face {/src/pages/404.js
    font-family: 'Futura BT-Medium';
    src:
      url(${FuturaBTMediumEOT}) format('embedded-opentype'),
      url(${FuturaBTMediumWOFF2}) format('woff2'),
      url(${FuturaBTMediumWOFF}) format('woff'),
      url(${FuturaBTMediumTTF}) format('truetype');
      font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura BT-Book';
    src:
      url(${FuturaBTBookEOT}) format('embedded-opentype'),
      url(${FuturaBTBookWOFF2}) format('woff2'),
      url(${FuturaBTBookWOFF}) format('woff'),
      url(${FuturaBTBookTTF}) format('truetype');
      font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: "Futura BT-Book";
    background-color: #FAB4AB;
    color: #e4352b;
    line-height: calc(1rem * 1.5);
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family:  "Futura BT-Book";
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  [hidden] {
    display: none;
  }

  ul {
    list-style-type: none;
  }

  *::before,
  *::after {
      box-sizing: border-box;
  }
`
