import styled, { css } from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

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
  margin: 2rem auto;

  @media (min-width: 1200px) {
    width: 60%;
  }
`

export const FoodImage = styled.div`
  width: 140px;
  height: 140px;
  border: 4px solid rgba(320, 320, 320, 0.3);
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;

  @media (min-width: 1200px) {
    position: absolute;
    width: 250px;
    height: 250px;

    &:nth-child(1) {
      top: 8rem;
      left: -100px;
    }

    &:nth-child(2) {
      top: 8rem;
      right: -100px;
    }

    &:nth-child(3) {
      bottom: 2rem;
      left: -100px;
    }

    &:nth-child(4) {
      bottom: 2rem;
      right: -100px;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
