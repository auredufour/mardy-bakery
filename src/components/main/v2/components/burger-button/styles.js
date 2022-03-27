import styled, { createGlobalStyle } from "styled-components"

export const Toggle = styled.button`
  transition: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  width: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 1rem;
  margin: 0;
  z-index: 10;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  div {
    border-radius: 1rem;
    transition: width 200ms ease-out, height 0.3s linear, transform 0.3s linear,
      opacity 300ms linear;
    position: relative;
    transform-origin: 1px;
    min-height: 7px;

    span {
      background: #e4352b;
      height: 4px;
      display: block;
      margin: 2px 0;
      border-radius: 5px;
    }

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      width: 2rem;
    }

    :nth-child(2) {
      width: ${({ isOpen }) => (isOpen ? "0" : "2rem")};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      width: 2rem;
    }
  }
`
