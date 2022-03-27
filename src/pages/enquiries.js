


import React from "react"
import _get from "lodash/get"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Enquiries } from "../components/main/v2/pages/enquiries"
import { GlobalStyles } from "../components/main/v2/styles"

const EnquiriesPage = () => (
  <>
    <GlobalStyles />
    <Layout>
      <SEO title="Enquiries" />
      <Enquiries />
    </Layout>
  </>
)

export default EnquiriesPage
