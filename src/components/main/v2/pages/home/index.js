import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import _get from "lodash/get"
import { ImageSection } from "./styles"
import { Layout } from "../../components/layout"

export const Home = () => {
  return (
    <Layout withInfo headerText="Mardy Bakery">
        <ImageSection>
          <StaticImage
            src={"../../assets/images/shop.jpeg"}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
            style={{ width: "90%"}}
          />
        </ImageSection>
    </Layout>
  )
}
