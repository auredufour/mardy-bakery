import React from "react"

import { Heading, hiddenStyles } from "./styles"

export const Header = ({ children, level, isSROnly = false }) => (
  <Heading level={level} style={isSROnly ? { ...hiddenStyles } : {}}>
    {children}
  </Heading>
)
