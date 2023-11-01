import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../../components/layout"
import {Text} from '../../components/text'
import {
  ListContainer,
  Container,
  FoodImage,
  ImageContainer,
  HeroImageContainer
} from "./styles"

export const About = () => {
  return (
    <Layout headerText="About">
      <div style={{ marginTop: '2rem' }} >
      <Container>
        <HeroImageContainer >
          <StaticImage
            src="../../assets/images/mb-2023-03.png"
            style={{
              border: "10px solid rgba(320, 320, 320, 0.3)",
              width: '100%',
            }}
          />
        </HeroImageContainer>
        <div>
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
              cookies, doughnuts & tarts.
            </li>
            <li>
              A variety of savoury bits, including quiches, sandwiches and salads.
            </li>
            <li>We serve coffee and tea, as well as soft drinks.</li>
          </ListContainer>
          <Text>
            While we cannot bake our own bread at the moment, we're thrilled to be
            selling Coombeshead Farm's sourdough in our shop.
          </Text>
          
        </div>
      </Container>
      <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
        <Text>
            Please visit our social media pages for our daily changing menu.
          </Text>
          </div>
          </div>
      <ImageContainer>
      <FoodImage>
          <StaticImage
            src="../../assets/images/mb-2023-09.png"
            style={{
              border: "10px solid rgba(320, 320, 320, 0.3)",
            }}
          />
        </FoodImage>
        
        <FoodImage>
          <StaticImage
            src="../../assets/images/mb-2023-06.png"
            style={{
              border: "10px solid rgba(320, 320, 320, 0.3)",
            }}
          />
        </FoodImage>
        <FoodImage>
          <StaticImage
            src="../../assets/images/mb-2023-10.png"
            style={{
              border: "10px solid rgba(320, 320, 320, 0.3)",
            }}
          />
        </FoodImage>
      </ImageContainer>
    </Layout>
  )
}
