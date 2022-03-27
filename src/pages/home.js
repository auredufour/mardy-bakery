import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Home } from "../components/main/v2/pages/home"
import { GlobalStyles } from "../components/main/v2/styles"

const HomePage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  </>
)

export default HomePage
