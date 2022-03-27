import React from "react"
import { StaticImage } from "gatsby-plugin-image"


import { Layout } from "../../components/layout"
import {Text} from '../../components/text'
import { ListContainer, Container } from "./styles"



export const About = () => {


  return (
    <Layout headerText="About">
      <StaticImage
        src={"../../assets/images/MB-biscuit.jpg"}
        style={{
          borderRadius: "50%",
          maxWidth: "250px",
          position: "absolute",
          top: "8rem",
          left: "-100px",
          border: "4px solid rgba(320,320,320,0.3)",
        }}
      />
      <StaticImage
        src={"../../assets/images/MB-chou.jpg"}
        style={{
          borderRadius: "50%",
          maxWidth: "250px",
          position: "absolute",
          top: "8rem",
          right: "-100px",
          border: "4px solid rgba(320,320,320,0.3)",
        }}
      />
      <StaticImage
        src={"../../assets/images/MB-ice-cream-cookie.jpg"}
        style={{
          borderRadius: "50%",
          maxWidth: "250px",
          position: "absolute",
          bottom: "2rem",
          left: "-100px",
          border: "4px solid rgba(320,320,320,0.3)",
        }}
      />
      <StaticImage
        src={"../../assets/images/MD-pie.jpeg"}
        style={{
          borderRadius: "50%",
          maxWidth: "250px",
          position: "absolute",
          bottom: "2rem",
          right: "-100px",
          border: "4px solid rgba(320,320,320,0.3)",
        }}
      />
      <Container>
        <Text>
          We're proud of the quality of the ingredients we use, and we carefully
          choose products according to their provenance, freshness and
          seasonality.
        </Text>
        <Text>
          Our products are baked fresh everyday - our offering include:
        </Text>
        <ListContainer>
          <li>
            A selection of baked goods, such as choux buns, cakes, biscuits,
            cookies, doughnuts & tarts
          </li>
          <li>
            A variety of savoury bits, including quiches, sandwiches and salads.
          </li>
          <li>We serve coffee and tea, as well as soft drinks.</li>
        </ListContainer>
        <Text>
          While we cannot bake our own bread at the moment, we're thrilled to be
          selling Coombeshead Farm's sourdough in our shop{" "}
        </Text>
        <Text>
          Please visit our social media pages for our daily changing menu.
        </Text>
      </Container>
    </Layout>
  )
}
