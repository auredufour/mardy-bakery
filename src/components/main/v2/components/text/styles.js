import styled from "styled-components"

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: ${({ margin }) => margin || '0 0 7px 0'};

  a {
    color: inherit;
  }

  ${({ color }) => color && `color: ${color}`};
`
