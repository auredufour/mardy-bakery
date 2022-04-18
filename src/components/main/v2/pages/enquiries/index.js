import React from "react"
import { Layout } from "../../components/layout"
import {Text} from '../../components/text'
import {
  Input,
  Label,
  InputContainer,
  InputTextarea,
  SendButton,
  SubmissionContainer,
  EnquiriesContainer,
  Message,
  FormContainer,
} from "./styles"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const Enquiries = () => {
  const [formValues, setFormValues] = React.useState({})
  const [formState, setFormState] = React.useState('')

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
   
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValues,
      }),
    })
      .then(() => {
        setFormState("success")
        setFormValues({})
      })
      .catch(() => setFormState("error"))
  }

  return (
    <Layout headerText="TandC">
      <EnquiriesContainer>
        <Text>
          At the moment, we're not taking on any wholesale orders, but we
          welcome bespoke orders for special occasions.
        </Text>
        <Text>
          Feel free to get in touch using the form below and we will get back to
          you as soon as possible!
        </Text>
        <FormContainer>
          {formState === "success" && (
            <Message>
              <Text aria-live="polite">
                <span role="img" aria-label="Congratulation! ">
                  🎉
                </span>{" "}
                Your message has been successfully sent!
              </Text>
            </Message>
          )}
          {formState === "error" && (
            <Message>
              <Text aria-live="polite">
                <span role="img" aria-label="Warning! ">
                  ⚠️
                </span>{" "}
                There was an error with your message, please try again!
              </Text>
            </Message>
          )}
          <form
            name="mb-contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="mb-contact" />
            <p hidden>
              <label htmlFor="bot-field">
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  id="bot-field"
                  onChange={handleChange}
                />
              </label>
            </p>
            <InputContainer>
              <Label htmlFor="name">Name*</Label>
              <Input
                type="text"
                id="name"
                name="name"
                autocomplete="name"
                required
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email*</Label>
              <Input
                type="email"
                id="email"
                name="email"
                autocomplete="email"
                required
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer width="100%">
              <Label htmlFor="subject">Subject*</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer width="100%">
              <Label htmlFor="message">Message*</Label>
              <InputTextarea
                id="message"
                name="message"
                rows="5"
                required
                onChange={handleChange}
              />
            </InputContainer>
            <SubmissionContainer>
              <SendButton type="submit">Send message</SendButton>
            </SubmissionContainer>
          </form>
        </FormContainer>
      </EnquiriesContainer>
    </Layout>
  )
}
