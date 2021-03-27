import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
    font: 400 18px Rubik, sans-serif;
    background-color: #FFB4AB;
    color: #D5271A;
  }
`

export const SectionContainer = styled.section`
  width: 100%;
  padding: 60px;
  max-width: 800px;
  margin: 0 auto 40px;

  ${({ withBackground }) => withBackground && `background-color: #ffeeee`};
`

export const About = styled(SectionContainer)``
export const Menu = styled(SectionContainer)``
export const Offer = styled(SectionContainer)``

export const InstaImg = styled.li`
  display: block;
  width: 33%;
  padding: 0;
  margin-bottom: 10px;

  img {
    display: block;
  }
`

export const Banner = styled(SectionContainer)``

export const StaticImageContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
  transition: width ease 0.2s;
`

export const OffersContainer = styled.ul`
  li {
    border-bottom: 1px solid #d5271a;
    margin-bottom: 15px;
    padding-bottom: 20px;
  }

  li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${({ withMargin }) => withMargin && `margin-bottom: 40px`};
`

export const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 7px;
`

export const ItemSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 7px;

  a {
    color: inherit;
  }

  ${({ color }) => color && `color: ${color}`};
`

export const Header = styled.div.attrs(({ level }) => ({
  role: "header",
  "aria-level": level,
}))`
  color: #383838;
  font-size: 24px;
  letter-spacing: 10%;
  margin-bottom: 30px;
`

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
