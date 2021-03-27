import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import _get from "lodash/get"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GlobalStyles = createGlobalStyle`
body {
    font: 400 18px Rubik, sans-serif;
    background-color: #FFB4AB;
    color: #D5271A;
  }
`

const SectionContainer = styled.section`
  width: 100%;
  padding: 60px;
  max-width: 800px;
  margin: 0 auto 40px;

  ${({ withBackground }) => withBackground && `background-color: #ffeeee`};
`

const About = styled(SectionContainer)``
const Menu = styled(SectionContainer)``
const Offer = styled(SectionContainer)``

const InstaImg = styled.li`
  display: block;
  width: 33%;
  padding: 0;
  margin: 0;

  img {
    display: block;
  }
`

const Banner = styled(SectionContainer)``

const StaticImageContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  transition: width ease 0.2s;
`

const OffersContainer = styled.ul`
  li {
    border-bottom: 1px solid #d5271a;
    margin-bottom: 15px;
    padding-bottom: 20px;
  }

  li:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${({ withMargin }) => withMargin && `margin-bottom: 40px`};
`

const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 7px;
`

const ItemSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 7px;

  a {
    color: inherit;
  }

  ${({ color }) => color && `color: ${color}`};
`

const Item = ({ title, subtitle, content }) => (
  <li>
    <ItemTitle>{title}</ItemTitle>
    {subtitle && <ItemSubTitle>{subtitle}</ItemSubTitle>}
    {content && (
      <ul>
        {content.map(({ name, price, additionalPrice }) => (
          <ItemSubTitle>{`${name} - ${price}${
            additionalPrice ? additionalPrice : ""
          }`}</ItemSubTitle>
        ))}
      </ul>
    )}
  </li>
)

const Header = styled.div.attrs(({ level }) => ({
  role: "header",
  "aria-level": level,
}))`
  color: #383838;
  font-size: 24px;
  letter-spacing: 10%;
  margin-bottom: 30px;
`

const InstaFeed = styled.ul`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 40px;
  justify-content: space-between;
`

const Insta = styled(SectionContainer)`
  padding: 60px 0;
  text-align: center;
  color: #383838;

  div[role="header"] {
    margin-bottom: 10px;
  }

  a {
    color: inherit;
    margin-bottom: 80px;
    font-size: 14px;
    font-weight: 500;
    display: block;
  }
`

// IGQVJWb09WYnRKcW9LYmtLTWlXNENybUZAKNHFoX3M2dnk0RnBrUC16ODFxRDJGUmVWNzBNV1c3c05IUnJ3emZAIdTRfVldpVjhKWlJfeGlteG9JSkpHUVBiWDBNSVdvNXB1N0ZAxX3FNQU0yMXBmZAlozMwZDZD

// query {
//   allInstaNode {
//     edges {
//       node {
//         id
//         likes
//         comments
//         mediaType
//         preview
//         original
//         timestamp
//         caption
//         hashtags
//         localFile {
//           childImageSharp {
//             fixed(width: 150, height: 150) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         },
//         permalink,
//         carouselImages {
//           preview,
//           localFile {
//           childImageSharp {
//             fixed(width: 150, height: 150) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         },
//         # Only available with the public api scraper
//         thumbnails {
//           src
//           config_width
//           config_height
//         }
//         dimensions {
//           height
//           width
//         }
//       }
//     }
//   }
// }

const IndexPage = () => {
  const handleScroll = () => {
    // if (
    //   document.body.scrollTop > document.getElementById("logoImage").offset()
    //   document.documentElement.scrollTop > 80
    // ) {
    //   document.getElementById("logoImage").style.width = "40%"
    // } else {
    //   if (document.getElementById("logoImage")) {
    //     document.getElementById("logoImage").style.width = "100%"
    //   }
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const offers = [
    {
      title: "Country Bread",
      subtitle:
        "Wholesome country bread made with flour grown and milled in the UK",
    },
    {
      title: "Lunch Boxes",
      subtitle:
        "Weekly changing lunchboxes of honely cooking based on simplicity and seasonality",
    },
    {
      title: "Pastries",
      subtitle:
        "Wholesome country bread made with flour grown and milled in the UKPastries inspired by French patisserie and other delicious treats",
    },
    {
      title: "Celebration Boxes and Large Orders",
      subtitle:
        "Pastries inspired by Frenc patisserie and other delicious treats",
    },
    {
      title: "Welcome Boxes for holiday lets",
      subtitle: "Surprise your guests with a lovely food box crafted on order",
    },
  ]

  const menu = [
    {
      title: "Country Bread",
      content: [
        { name: "Sourdough", price: "2.80" },
        { name: "Rye Loaf", price: "3.80" },
      ],
    },
    {
      title: "Lunch Boxes",
      content: [
        {
          name:
            "Split pea soup + Roast pork, fennel and salsa verde sandwich + chocolate éclair",
          price: "12.00",
        },
      ],
    },
    {
      title: "Pastries",
      content: [
        {
          name: "Vanilla cheesecake",
          price: "3.50",
        },
        {
          name: "Chocolate éclair",
          price: "3.00",
        },
        {
          name: "Raspberry macarons",
          price: "0.75",
          additionalPrice: "6 for $4",
        },
      ],
    },
  ]

  const id = "46412870826"

  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(limit: 6) {
        edges {
          node {
            localImage {
              childImageSharp {
                fixed(width: 251, height: 251) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
  console.log("arrayOfInstaImages", arrayOfInstaImages)

  return (
    <>
      <GlobalStyles />
      <Layout>
        <SEO title="Home" />
        <Banner>
          <StaticImageContainer id="logoImage">
            <StaticImage
              src="../images/Image.png"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt=""
              style={{ width: "80%", maxHeight: "100vh" }}
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
            {arrayOfInstaImages.map((item, i) => {
              return (
                <InstaImg key={i}>
                  <Img fixed={item.node.localImage.childImageSharp.fixed} />
                </InstaImg>
              )
            })}
          </InstaFeed>
        </Insta>
      </Layout>
    </>
  )
}

export default IndexPage
