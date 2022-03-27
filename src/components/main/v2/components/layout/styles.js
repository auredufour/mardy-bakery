import styled, { css, keyframes } from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;

  @media (min-width: 820px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }

  @media (min-width: 1400px) {
    width: 60%;
  }
`

export const layoutContainer = {
  width:"100%",
}


export const Main = styled.main`
  padding: 0 60px;
`

export const Banner = styled.div`
`
