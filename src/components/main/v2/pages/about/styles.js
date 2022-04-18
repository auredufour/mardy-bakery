import styled from "styled-components"

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
  margin: 2rem auto 0;

  @media (min-width: 1200px) {
    width: 60%;
  }
`

export const FoodImage = styled.div`
  border-radius: 8.75rem;
  border: 4px solid rgba(320, 320, 320, 0.3);
  display: inline-block;
  height: 8.75rem;
  overflow: hidden;
  width: 8.75rem;

  &:nth-child(1),
  &:nth-child(3) {
    margin-right: 0.25rem;
  }

  &:nth-child(2),
  &:nth-child(4) {
    margin-left: 0.25rem;
  }

  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 0.5rem;
  }

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
      bottom: 5rem;
      left: -100px;
    }

    &:nth-child(4) {
      bottom: 5rem;
      right: -100px;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
