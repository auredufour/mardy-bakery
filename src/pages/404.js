import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Home } from "../components/main/v2/pages/home"
import { GlobalStyles } from "../components/main/v2/styles"

const NotFoundPage = () => (
   <>
    <GlobalStyles />
    <Layout>
      <SEO title="Home" />
      <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
)
 
export default NotFoundPage
