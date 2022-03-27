import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import _get from "lodash/get"

import { Nav } from "../nav"
import { LogoWithInfo } from "../logo-with-info"
import { layoutContainer, Main, Banner, Container } from "./styles"
import { Header } from "../header"

export const Layout = ({ children, withInfo = false, headerText = 'Mardy Bakery' }) => {
 
  return (
    <div style={layoutContainer}>
      <Container>
        <Nav />
        <Banner role="banner">
          <Header level="1" isSROnly>
            {headerText}
          </Header>
        </Banner>
        <LogoWithInfo withInfo={withInfo} />
        <Main>{children}</Main>
      </Container>
    </div>
  )
}
