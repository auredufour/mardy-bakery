
import styled from "styled-components"


const fontSize = {
  1: '32px',
  2: '28px',
  3: '20px',
  4: '16px',
}

export const hiddenStyles = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

export const Heading = styled.div.attrs(({ level }) => ({
  role: "header",
  "aria-level": level,
}))`
  color: ${({ color }) => (color ? color : "#e4352b")};
  font-size: ${({ level }) => fontSize[level]};
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Futura BT-Bold";
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  letter-spacing: ${({ uppercase }) => (uppercase ? "6px" : "inherit")};
  text-align: ${({ centered }) => (centered ? "center" : "inherit")};
`
