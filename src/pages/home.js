import React from "react"

import SEO from "../components/seo"
import { Home } from "../components/main/v2/pages/home"
import { GlobalStyles } from "../components/main/v2/styles"

const HomePage = () => (
  <>
    <GlobalStyles />
      <SEO title="Home" />
      <Home />
  </>
)

export default HomePage
