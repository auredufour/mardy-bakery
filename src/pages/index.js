import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        width: "100%",
        "background-color": "#FBB4AC",
        textAlign: "center",
        "font-family": "Roboto, sans-serif",
      }}
    >
      <StaticImage
        src="../images/mardy-bakery-logo.png"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
        style={{ width: "80%", maxHeight: "100vh" }}
      />
    </div>
  </Layout>
)

export default IndexPage
