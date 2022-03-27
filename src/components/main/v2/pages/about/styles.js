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
  width: 60%;
  margin: 2rem auto;
`
