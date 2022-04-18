import styled from "styled-components"

export const hiddenStyles = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

export const Header = styled.div.attrs(({ level }) => ({
  role: "header",
  "aria-level": level,
}))`
  color: ${({ color }) => (color ? color : "#e4352b")};
  font-size: 28px;
  letter-spacing: 5px;
  margin-bottom: 30px;
  font-weight: 700;
  font-family: "Futura BT-Bold";
`

export const ImageSection = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: -1;
  top: -4rem;
`


