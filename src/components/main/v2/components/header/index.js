import React from "react"

import { Heading, hiddenStyles } from "./styles"

export const Header = ({
  children,
  level,
  isSROnly = false,
  uppercase,
  centered,
  style = {},
}) => (
  <Heading
    uppercase={uppercase}
    level={level}
    style={isSROnly ? { ...hiddenStyles } : style}
    centered={centered}
  >
    {children}
  </Heading>
)
