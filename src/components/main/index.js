import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import _get from "lodash/get"
import Img from "gatsby-image"
import { useInstagramQuery } from "./api/useAllInstagramContent.js"

import { menu, offers } from "./constants"
import {
  Banner,
  Header,
  Insta,
  InstaFeed,
  InstaImg,
  ItemSubTitle,
  ItemTitle,
  Menu,
  Offer,
  OffersContainer,
  StaticImageContainer,
  hiddenStyles,
} from "./styles"

const Item = ({ title, subtitle, content }) => (
  <li>
    <ItemTitle>{title}</ItemTitle>
    {subtitle && <ItemSubTitle>{subtitle}</ItemSubTitle>}
    {content && (
      <ul>
        {content.map(({ name, price, additionalPrice }) => (
          <ItemSubTitle>{`${name} - £${price} ${
            additionalPrice ? additionalPrice : ""
          }`}</ItemSubTitle>
        ))}
      </ul>
    )}
  </li>
)

const MainPage = () => {
  const data = useInstagramQuery()

  return (
    <>
      <Banner>
        <StaticImageContainer id="logoImage">
          <Header level="1" style={{ ...hiddenStyles }}>
            Mardy Bakery
          </Header>
          <StaticImage
            src="../../images/Image.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt=""
            style={{ width: "100%" }}
          />
        </StaticImageContainer>
      </Banner>
      <Offer withBackground>
        <Header level={2}>WE OFFER</Header>
        <OffersContainer>
          {offers.map(offer => (
            <Item {...offer} />
          ))}
        </OffersContainer>
      </Offer>
      <Menu withBackground>
        <Header level={2}>MENU OF THE WEEK</Header>
        <OffersContainer withMargin>
          {menu.map(item => (
            <Item {...item} />
          ))}
        </OffersContainer>
        <ItemSubTitle color="#383838">
          <span>Order by Friday 7PM by email – </span>
          <a href="mailto:info@mardybakery.com">info@mardybakery.com</a>
        </ItemSubTitle>
        <ItemSubTitle color="#383838">
          Pay by card or cash on pick up or delivery.
        </ItemSubTitle>
      </Menu>
      <Insta>
        <Header level={2}>FOLLOW US ON INSTAGRAM</Header>
        <a href="https://www.instagram.com/mardy.bakery/">
          <ItemSubTitle color="#383838">@mardy.bakery</ItemSubTitle>
        </a>
        <InstaFeed>
          {data.map((item, i) => {
            return (
              <InstaImg key={i}>
                <Img fixed={item.node.localImage.childImageSharp.fixed} />
              </InstaImg>
            )
          })}
        </InstaFeed>
      </Insta>
    </>
  )
}

export default MainPage
