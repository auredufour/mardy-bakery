import styled, { css, keyframes } from "styled-components"
import { Link } from "gatsby"


export const hiddenStyles = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

export const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0;
  width: 100%;

  @media (min-width: 1200px) {
    padding: 2rem 0 0;
  }
`

export const SocialMediaContainer = styled.ul`
  display: flex;
  margin: 0;
`

export const SocialMediaItem = styled.li`
  margin-right: ${({ withMarginRight }) => (withMarginRight ? "1rem" : 0)};

  a {
    &:focus {
      outline: solid white;
      outline-offset: 1px;
      border-radius: 10px;
    }
  }
`

//// Menu
export const BurgerToggleContainer = styled.div`
  position: relative;
  padding; 0;
  mergin: 0;
`

export const Sidebar = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: ${({ isShowing }) => (isShowing ? "0px" : "-100%")};
  background: #e4352b;
  transition: left 0.4s ease;
  z-index: 10;
  visibility: ${({ isShowing }) => (isShowing ? "visible" : "hidden")};

  @media (min-width: 800px) {
    width: calc(20% + 3rem);
    left: ${({ isShowing }) => (isShowing ? "0px" : `calc(-20% - 3rem)`)};
  }
`

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem;
`

export const MenuItem = styled.li`
  padding-bottom: 2.5rem;
`

export const MenuLink = styled(Link)`
  color: #ffb4ab;
  text-transform: uppercase;
  font-family: "Futura BT-Bold";
  text-decoration: none;
  font-size: 1.6rem;
  letter-spacing: 6px;
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};

  &:hover {
    text-decoration: underline;
  }
`



