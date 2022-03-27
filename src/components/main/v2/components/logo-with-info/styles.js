import styled from "styled-components"

export const logoContainer = {
  display: "flex",
  flexDirection: "row",
  alignContents: "flex-end",
}

export const sideContainer = {
  width: "25%",
  textAlign: "center",
  alignSelf: "flex-end",
  marginBottom: "3rem",
}

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: flex-end;
`

export const LinkItem = styled.a`
  text-decoration: none;
`

export const SocialMediaContainer = styled.ul`
  display: flex;
`

export const layoutContainer = {
  margin: "0 auto",
  maxWidth: "80%",
  position: "relative",
}

export const ImageContainer = styled.div`
  width: ${({ withInfo }) => (withInfo ? "50%" : "100%")};
  text-align: center;
`
