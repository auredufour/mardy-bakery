import styled from "styled-components"

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: calc(1rem * 1.5);
  font-weight: 500;
  margin: ${({ margin }) => margin || '0 0 6px 0'};

  a {
    color: inherit;
  }

  ${({ color }) => color && `color: ${color}`};
`
