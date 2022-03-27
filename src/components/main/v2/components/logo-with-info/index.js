import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {Header} from '../header'
import {Text} from '../text'

import {
  ImageContainer,
  logoContainer,
  sideContainer,
} from "./styles"


const Location = () => (
  <div style={sideContainer}>
    <Header level="3">Location</Header>
    <Text>10A Lostwithiel Street</Text>
    <Text>Fowey PL23 1BD</Text>
  </div>
)

const Hours = () => (
  <div style={sideContainer}>
    <Header level="3">Opening hours</Header>
    <Text>Tuesday - Saturday</Text>
    <Text>10am-4pm</Text>
  </div>
)


export const LogoWithInfo = ({ withInfo, headerText }) => {
  return (
    <section style={logoContainer}>
      <Header level="2" isSROnly>
        Information
      </Header>
      {withInfo && <Location />}
      <ImageContainer withInfo={withInfo}>
        <StaticImage
          loading="eager"
          src="../../assets/images/mardy-bakery-logo.jpg"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt=""
          style={{ width: "80%", maxWidth: '400px' }}
        />
      </ImageContainer>
      {withInfo && <Hours />}
    </section>
  )
}
