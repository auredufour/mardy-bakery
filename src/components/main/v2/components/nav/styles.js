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
  align-item: flex-end;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0;
  width: 100%;
`

export const SocialMediaContainer = styled.ul`
  display: flex;
  margin: 0;
`

export const SocialMediaItem = styled.li`
  margin-right: ${({ withMarginRight }) => (withMarginRight ? "1rem" : 0)};
`

//// Menu
export const BurgerToggleContainer = styled.div`
  position: relative;
  padding; 0;
  mergin: 0;
`

export const Sidebar = styled.div`
  position: fixed;
  width: calc(20% + 3rem);
  height: 100%;
  left: ${({ isShowing }) => (isShowing ? "0px" : `calc(-20% - 3rem)`)};
  background: #e4352b;
  transition: left 0.4s ease;
  z-index: 10;
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

  &:hover {
    text-decoration: underline;
  }
`



