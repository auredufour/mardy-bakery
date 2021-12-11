import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import _get from "lodash/get"
import Img from "gatsby-image"
// import { useInstagramQuery } from "./api/useAllInstagramContent.js"
import christmasDeer from "../assets/christmasDeer.png"
import christmasHolly from "../assets/christmasHolly.png"
import hollyVictorian from "../assets/hollyVictorian.png"
import vintageChristmasBird from "../assets/vintageChristmasBird.png"

import { menu, offers, christmasOffers } from "./constants"
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
  MenuContainer,
  DeerImg,
  HeaderContainer,
  SubHeaderContainer,
  SubHeader,
  ChristmasOrderContainer,
  HollyImg,
  Details,
  DetailsImageContaner,
  HollyVictorian,
  ChristmasItemSubTitle,
  ChristmasDetailsList,
  ChristmanItemTitle,
} from "./styles"

const ChristmasOfferItem = ({ title, subtitles }) => (
  <li>
    <ChristmanItemTitle>{title}</ChristmanItemTitle>
    {subtitles.map(subtitle => (
      <ChristmasItemSubTitle key={subtitle} color="#3A3A3A">
        {subtitle}
      </ChristmasItemSubTitle>
    ))}
  </li>
)

const ChristmasOffer = () => (
  <>
    <Offer withBackground>
      <HeaderContainer>
        <DeerImg src={christmasDeer} />
        <SubHeaderContainer>
          <Header level={2}>CHRISTMAS MENU</Header>
          <SubHeader>PRE-ORDERS</SubHeader>
        </SubHeaderContainer>
        <DeerImg src={christmasDeer} rotate />
      </HeaderContainer>
      <ChristmasOrderContainer withMargin>
        {christmasOffers.map(offer => (
          <ChristmasOfferItem key={offer.title} {...offer} />
        ))}
      </ChristmasOrderContainer>
      <Details>
        <DetailsImageContaner>
          <HollyImg src={christmasHolly} rotate />
          <HollyImg src={christmasHolly} />
        </DetailsImageContaner>
        <ChristmasItemSubTitle>
          You can place an order by email at{" "}
          <a href="mailto:info@mardybakery.com">info@mardybakery.com</a>
        </ChristmasItemSubTitle>
        <ChristmasItemSubTitle>
          Don’t forget to include your <></>name, phone number & chosen
          collection date.
        </ChristmasItemSubTitle>
        <ChristmasItemSubTitle>PLEASE NOTE:</ChristmasItemSubTitle>
        <ChristmasDetailsList>
          <li>
            <ChristmasItemSubTitle>
              All orders must be placed on or before Monday 20th of December.
            </ChristmasItemSubTitle>
          </li>
          <li>
            <ChristmasItemSubTitle>
              Payments will be taken in full in advance via BACS
            </ChristmasItemSubTitle>
          </li>
          <li>
            <ChristmasItemSubTitle>
              A message will be sent to you when your order is ready to be
              collected.
            </ChristmasItemSubTitle>
          </li>
          <li>
            <ChristmasItemSubTitle>
              Please inform us of any allergies when ordering.
            </ChristmasItemSubTitle>
          </li>
        </ChristmasDetailsList>
        <ItemSubTitle>🎄Joyeux Noël 🎄</ItemSubTitle>
      </Details>
    </Offer>
  </>
)


const Item = ({ title, subtitle, content }) => (
  <li>
    <ItemTitle>{title}</ItemTitle>
    {subtitle && <ItemSubTitle>{subtitle}</ItemSubTitle>}
    {content && (
      <ul>
        {content.map(({ name, price, additionalPrice }) => (
          <li>
            <ItemSubTitle>{`${name} - £${price} ${
              additionalPrice ? additionalPrice : ""
            }`}</ItemSubTitle>
          </li>
        ))}
      </ul>
    )}
  </li>
)

const MainPage = () => {
  let data;
  // const data = useInstagramQuery()
  const todayDate = new Date()
  const showChristmasMenu =
    todayDate.getMonth() + 1 === 12 && todayDate.getDate() < 25 ? true : false


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
      {showChristmasMenu ? (
        <ChristmasOffer />
      ) : (
        <>
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
            <MenuContainer withMargin>
              {menu.map(item => (
                <Item {...item} />
              ))}
            </MenuContainer>
            <ItemSubTitle>
              <span>Order by Thursday 7PM by email – </span>
              <a href="mailto:info@mardybakery.com">info@mardybakery.com</a>
            </ItemSubTitle>
            <ItemSubTitle>Pay by card or cash on pick up/delivery</ItemSubTitle>
            <ItemSubTitle>Delivers around Charlestown, Cornwall</ItemSubTitle>
            <ItemSubTitle>
              Let us know if you have any allergies or dietary requirements
            </ItemSubTitle>
            <ItemSubTitle>
              <span>Find our bake goods at </span>
              <a href="https://www.no1cubs.co.uk/coffee">Cubs Coffee</a>
              <span> & Watergate Bay</span>
            </ItemSubTitle>
          </Menu>
        </>
      )}
      {data && (
        <Insta>
          <Header level={2} color="#000">
            FOLLOW US ON INSTAGRAM
          </Header>
          <a href="https://www.instagram.com/mardy.bakery/">
            <ItemSubTitle>@mardy.bakery</ItemSubTitle>
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
      )}
    </>
  )
}

export default MainPage
