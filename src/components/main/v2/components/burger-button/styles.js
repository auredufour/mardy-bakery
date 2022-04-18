import styled from "styled-components"

export const Toggle = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  margin: 0;
  overflow: hidden;
  padding: 0;
  transition: none;
  z-index: 10;
  padding: 0 0.2rem;

  &:focus:hover {
    outline: 0;
  }

  &:focus:not(:hover) {
    border-radius: 10px;
    outline-offset: 0.2rem;
    outline: 1px solid white;
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
