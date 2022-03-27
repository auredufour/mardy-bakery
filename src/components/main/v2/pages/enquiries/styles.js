import styled from "styled-components"

export const hiddenStyles = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
}

export const Input = styled.input`
  border: 2px solid #e4352b;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    outline: solid white;
    outline-offset: 1px;
  }
`

export const InputTextarea = styled.textarea`
  border: 2px solid #e4352b;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    outline: solid white;
    outline-offset: 1px;
  }
`

export const Label = styled.label`
  margin-right: 1rem;
  font-weight: bold;
`

export const InputContainer = styled.div`
  width: ${({ width }) => width || "50%"};
  display: inline-block;
  margin-bottom: 1rem;

  &:nth-child(2) {
    padding-right: 0.5rem;
  }

  &:nth-child(3) {
    padding-left: 0.5rem;
  }
`

export const Form = styled.form`
  margin: 2rem 0;
`

export const SendButton = styled.button`
  background: #e4352b;
  color: #ffb4ab;
  border: 0;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  align-self: flex-end;
  text-transform: uppercase;
  letter-spacing; 5px;
`

export const SubmissionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const EnquiriesContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1200px) {
    margin: 2rem auto;
    width: 70%;
  }
`
