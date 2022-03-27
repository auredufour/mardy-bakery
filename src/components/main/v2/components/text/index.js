import React from "react"

import { Paragraph } from "./styles"

export const Text = ({ children, margin }) => (
  <Paragraph margin={margin}>{children}</Paragraph>
)
