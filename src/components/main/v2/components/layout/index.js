import React from "react"

import { Nav } from "../nav"
import { LogoWithInfo } from "../logo-with-info"
import { Header } from "../header"
import { layoutContainer, Main, Banner, Container } from "./styles"

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
