import * as React from "react"

import SEO from "../components/seo"
import { GlobalStyles } from "../components/main/v2/styles"
import { Layout } from '../components/main/v2/components/layout'


const NotFoundPage = () => (
  <>
    <GlobalStyles />
    <SEO title="Home" />
    <Layout headerText="About">
      <div style={{ textAlign: "center" }}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  </>
)
 
export default NotFoundPage
