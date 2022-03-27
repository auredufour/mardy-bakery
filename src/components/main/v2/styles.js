import styled, { createGlobalStyle } from "styled-components"
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

  @font-face {
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

body{
    font-family: "Futura BT-Book";
    background-color: #FAB4AB;
    color: #e4352b;
  }

  p {
    font-family: "Futura BT-Book";
    background-color: #FAB4AB;
    color: #e4352b;
  }
`
