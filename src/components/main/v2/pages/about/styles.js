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
  margin-bottom: 2rem;
  
  @media (min-width: 860px) {
    width: 100%;
    display: flex;
  }
`

export const HeroImageContainer = styled.div`
 textAlign: center;
 margin: 0 auto;
 width: 85%;
 margin-bottom: 2rem;
  
  @media (min-width: 860px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

export const FoodImage = styled.div`
  width: 32%;
`

export const staticImageStyle = css`
  border-radius: 8.75rem;
  border: 4px solid rgba(320, 320, 320, 0.3);
  height: 8.75rem;
  width: 8.75rem;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
