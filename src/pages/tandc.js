import React from "react"

import SEO from "../components/seo"
import { TandC } from "../components/main/v2/pages/tc"
import { GlobalStyles } from "../components/main/v2/styles"

const TandCPage = () => (
  <>
    <GlobalStyles />
      <SEO title="About" />
      <TandC />
  </>
)

export default TandCPage
