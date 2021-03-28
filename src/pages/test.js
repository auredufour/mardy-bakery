import React from "react"
import _get from "lodash/get"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import { GlobalStyles } from "../components/main/styles"

const TestPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <SEO title="Home" />
      <Main />
    </Layout>
  </>
)

export default TestPage
