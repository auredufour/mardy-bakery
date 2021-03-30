import styled, { createGlobalStyle } from "styled-components"
import FuturaBTBoldEOT from "../assets/fonts/FuturaBT-Bold.eot"
import FuturaBTBoldWOFF2 from "../assets/fonts/FuturaBT-Bold.woff2"
import FuturaBTBoldWOFF from "../assets/fonts/FuturaBT-Bold.woff"
import FuturaBTBoldTTF from "../assets/fonts/FuturaBT-Bold.ttf"
import FuturaBTMediumEOT from "../assets/fonts/FuturaBT-Medium.eot"
import FuturaBTMediumWOFF2 from "../assets/fonts/FuturaBT-Medium.woff2"
import FuturaBTMediumWOFF from "../assets/fonts/FuturaBT-Medium.woff"
import FuturaBTMediumTTF from "../assets/fonts/FuturaBT-Medium.ttf"
import FuturaBTBookEOT from "../assets/fonts/FuturaBT-Book.eot"
import FuturaBTBookWOFF2 from "../assets/fonts/FuturaBT-Book.woff2"
import FuturaBTBookWOFF from "../assets/fonts/FuturaBT-Book.woff"
import FuturaBTBookTTF from "../assets/fonts/FuturaBT-Book.ttf"

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

body {
    font-family: "Futura BT-Book";
    background-color: #FFB4AB;
    color: #000;
  }
`

export const SectionContainer = styled.section`
  width: 100%;
  padding: 60px;
  max-width: 800px;
  margin: 0 auto 40px;
  ${"" /* #ffeeee */}
  ${({ withBackground }) => withBackground && `background-color: #fff`};
`

export const About = styled(SectionContainer)``

export const Offer = styled(SectionContainer)``

export const InstaImg = styled.li`
  display: block;
  width: 33%;
  padding: 0;
  margin-bottom: 10px;

  img {
    display: block;
  }

  @media only screen and (max-width: 750px) {
    width: 50%;
    justify-content: space-around;

    &:nth-child(even) {
      text-align: left;
      > div {
        margin-left: 10px;
      }
    }

    &:nth-child(odd) {
      text-align: right;
      > div {
        margin-right: 10px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    &:nth-child(even),
    &:nth-child(odd) {
      text-align: center;

      > div {
        margin: 0;
      }
    }
  }
`

export const Banner = styled(SectionContainer)`
  margin-bottom: 0;
`

export const StaticImageContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
  transition: width ease 0.2s;
  @media only screen and (max-width: 650px) {
    width: 70%;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

export const ItemTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 0.5px;
`

export const ItemSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;

  a {
    color: inherit;
  }

  ${({ color }) => color && `color: ${color}`};
`

export const OffersContainer = styled.ul`
  margin-bottom: 0;

  > li {
    padding-bottom: 20px;
  }

  li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${({ withMargin }) => withMargin && `margin-bottom: 40px`};
`

export const MenuContainer = styled(OffersContainer)`
  border-bottom: 1px solid #e4352b;
  padding-bottom: 25px;
  margin-bottom: 25px;

  ${ItemSubTitle} {
    margin-bottom: 0;

    ul {
      margin: 0;
    }

    &:before {
      content: "";
      display: inline-block;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      margin-right: 10px;
      background: #e4352b;
    }
  }
`

export const Header = styled.div.attrs(({ level }) => ({
  role: "header",
  "aria-level": level,
}))`
  color: ${({ color }) => (color ? color : "#e4352b")};
  font-size: 28px;
  letter-spacing: 5px;
  margin-bottom: 30px;
  font-weight: 700;
  font-family: "Futura BT-Bold";
`

export const Menu = styled(SectionContainer)``

export const InstaFeed = styled.ul`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 40px;
  justify-content: space-between;
`

export const Insta = styled(SectionContainer)`
  padding: 60px 0;
  text-align: center;
  color: #383838;

  div[role="header"] {
    margin-bottom: 10px;
  }

  a {
    color: inherit;
    margin-bottom: 80px;
    font-size: 14px;
    font-weight: 500;
    display: block;
    padding-bottom: 5px;
  }
`

export const hiddenStyles = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

// color = "#383838"
