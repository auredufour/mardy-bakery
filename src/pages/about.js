import React from "react"
import _get from "lodash/get"

import SEO from "../components/seo"
import { About } from "../components/main/v2/pages/about"
import { GlobalStyles } from "../components/main/v2/styles"

const AboutPage = () => (
  <>
    <GlobalStyles />
      <SEO title="About" />
      <About />
  </>
)

export default AboutPage
