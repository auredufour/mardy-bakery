import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import {Header} from '../header'
import {Text} from '../text'

import {
  ImageContainer,
  Section,
  SideContainerLeft,
  SideContainerRight,
  LogoContainer,
} from "./styles"


const Location = () => (
  <SideContainerLeft>
    <Header level="3" uppercase>
      Location
    </Header>
    <Text>10A Lostwithiel Street</Text>
    <Text>Fowey PL23 1BD</Text>
  </SideContainerLeft>
)

const Hours = () => (
  <SideContainerRight>
    <Header level="3" uppercase>
      Opening hours
    </Header>
    <Text>Tuesday - Saturday</Text>
    <Text>10am-4pm</Text>
  </SideContainerRight>
)

export const LogoWithInfo = ({ withInfo, headerText }) => {
  return (
    <Section>
      <Header level="2" isSROnly>
        Information
      </Header>
      <LogoContainer>
        {withInfo && <Location />}
        <ImageContainer withInfo={withInfo}>
          <StaticImage
            loading="eager"
            src="../../assets/images/mardy-bakery-logo.jpg"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
          />
        </ImageContainer>
        {withInfo && <Hours />}
      </LogoContainer>
    </Section>
  )
}
