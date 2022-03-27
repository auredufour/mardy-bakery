import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyles } from "../components/main/v2/styles"
import {Layout as PageLayout} from '../components/main/v2/components/layout'


const NotFoundPage = () => (
  <>
    <GlobalStyles />
      <SEO title="Home" />
      <PageLayout headerText="About">
        <div style={{textAlign: 'center'}}>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </PageLayout>
  </>
)
 
export default NotFoundPage
