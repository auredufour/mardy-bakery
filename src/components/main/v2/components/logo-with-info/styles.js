import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-contents: flex-end;
  padding: 0 1rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    padding: 0;
  }
`

export const SideContainerLeft = styled.div`
  width: 100%;
  text-align: center;
  align-self: flex-end;
  margin-bottom: 3rem;
  order: 2;

  @media (min-width: 1200px) {
    order: 1;
    width: 25%;
  }
`

export const SideContainerRight = styled.div`
  width: 100%;
  text-align: center;
  align-self: flex-end;
  margin-bottom: 3rem;
  order: 3;

  @media (min-width: 1200px) {
    width: 25%;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`
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
  order: 1;
  text-align: center;
  width: 100%;

  img {
    width: 300px;
    padding: 2rem 0;
  }

  @media (min-width: 1200px) {
    order: 2;
    width: ${({ withInfo }) => (withInfo ? "50%" : "100%")};

    img {
      width: 460px;
      padding: 0;
    }
  }
`

