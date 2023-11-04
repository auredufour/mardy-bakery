import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "../../components/layout"
import {Text} from '../../components/text'
import {
  Container,
  CakeContainer,
  ImageContainer,
  Paragraph,
} from "./styles"
import { Header } from "../../components/header"

export const CelebrationCakes = () => {
  return (
    <Layout headerText="Celebration Cakes">
      <div style={{ textAlign: 'center', width: '100%', margin: '2rem 0'}}>
        <Text>To order our celebration cakes, please email <a href="mailto:info@mardybakery.com">info@mardybakery.com</a></Text>
      </div>
      <Container>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-1.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">VICTORIA SPONGE</Header>
            <div style={{ marginBottom: '1rem'}}>
              <Text margin={0}>
                Vanilla sponge, strawberry jam and vanilla buttercream
              </Text>
            </div>
            <Paragraph color={'#000'}>
              £45 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
              £60 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-2.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">
              LEMON
            </Header>
            <div style={{ marginBottom: '1rem'}}>
              <Text>
                Lemon sponge, lemon curd and lemony buttercream
              </Text>
            </div>
            <Paragraph color={'#000'}>
              £45 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
              £60 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-3.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">
              CARROT
            </Header>
            <div style={{ marginBottom: '1rem'}}>
            <Text>
              Carrot & pecan sponge, cream cheese frosting
            </Text>
            </div>
            <Paragraph color={'#000'}>
              £45 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
              £60 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-5.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">
            RAINBOW
            </Header>
            <div style={{ marginBottom: '1rem'}}>
              <Text>
                Vanilla & sprinkles sponge, biscuit crunch & vanilla buttercream
              </Text>
            </div>
            <Paragraph color={'#000'}>
              £45 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
              £60 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-4.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">
            SALTED CARAMEL & CHOCOLATE
            </Header>
            <div style={{ marginBottom: '1rem'}}>
              <Text>
                Chocolate sponge, caramel, chocolate biscuit crunch & salted caramel buttercream
              </Text>
            </div>
            <Paragraph color={'#000'}>
              £45 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
              £60 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <CakeContainer>
          <ImageContainer>
            <StaticImage
              alt=''
              src='../../assets/images/cake-6.jpg'
            />
          </ImageContainer>
          <div>
            <Header level="2">
            CHOCOLATE
            </Header>
            <div style={{ marginBottom: '1rem'}}>
            <Text>
              Chocolate sponge, chocolate crémeux, chocolate biscuit crunch & chocolate buttercream
            </Text>
            </div>
            <Paragraph color={'#000'}>
              £55 for 6inch (serves 6-10 people)
            </Paragraph>
            <Paragraph color={'#000'}>
            £70 for 8inch (serves 8-12 people)
            </Paragraph>
          </div>
        </CakeContainer>
        <StaticImage
        src="../../assets/images/cakes.png"
        style={{
          border: "10px solid rgba(320, 320, 320, 0.3)",
        }}
      />
        </Container>
    </Layout>
  )
}
