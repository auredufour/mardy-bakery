
import styled from "styled-components"

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
  font-size: 28px;
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Futura BT-Bold";
`
