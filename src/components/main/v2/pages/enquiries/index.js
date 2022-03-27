import React from "react"
import _get from "lodash/get"
import { Layout } from "../../components/layout"
import {Text} from '../../components/text'
import {
  Input,
  Label,
  InputContainer,
  Form,
  InputTextarea,
  SendButton,
  SubmissionContainer,
  hiddenStyles,
} from "./styles"

export const Enquiries = () => {
  return (
    <Layout headerText="TandC">
      <Text>
        At the moment, we're not taking on any wholesame orders, but we welcome
        bespoke orders for special occasions.
      </Text>
      <Text>
        {" "}
        Feel free to get in touch using the form belowand we will get back to
        you as soon as possible
      </Text>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <div style={{ ...hiddenStyles }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </div>
        <InputContainer>
          <Label for="name">Name*</Label>
          <Input type="text" id="name" autocomplete="name" required />
        </InputContainer>
        <InputContainer>
          <Label for="email">Email*</Label>
          <Input type="email" id="email" autocomplete="email" required />
        </InputContainer>
        <InputContainer width="100%">
          <Label for="subject">Subject*</Label>
          <Input type="text" id="subject" required />
        </InputContainer>
        <InputContainer width="100%">
          <Label for="email">Message*</Label>
          <InputTextarea id="message" rows="5" required />
        </InputContainer>
        <SubmissionContainer>
          <SendButton type="submit">Send message</SendButton>
        </SubmissionContainer>
      </Form>
    </Layout>
  )
}
