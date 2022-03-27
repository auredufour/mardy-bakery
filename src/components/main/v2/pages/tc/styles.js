import styled from "styled-components"

export const SubSection = styled.div`
  margin: 0 auto;
  width: 100%;

  &:nth-child(1) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    margin: 2rem auto;
    width: 70%;
  }
`
