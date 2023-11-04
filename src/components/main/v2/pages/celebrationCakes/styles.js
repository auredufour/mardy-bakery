import styled, { css } from "styled-components"

export const ListContainer = styled.ul`
  margin-bottom: 0;

  > li {

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

  li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 1rem;
  }

  ${({ withMargin }) => withMargin && `margin-bottom: 40px`};
`

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 820px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const staticImageStyle = css`
  border-radius: 8.75rem;
  border: 4px solid rgba(320, 320, 320, 0.3);
  height: 8.75rem;
  width: 8.75rem;
`

export const CakeContainer = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  background:  rgba(320, 320, 320, 0.3);
  padding: 2rem;

  @media (min-width: 820px) {
    width: 48%;
  }
`

export const ImageContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: calc(1rem * 1.5);
  font-weight: 500;
  margin: ${({ margin }) => margin || '0 0 6px 0'};

  ${({ color }) => color && `color: ${color}`};
`