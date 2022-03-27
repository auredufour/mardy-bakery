require("dotenv").config({ path: "./.env" })

module.exports = {
  siteMetadata: {
    title: `Mardy Bakery`,
    description: `Mardy Bakery | homestyle bakery specialising in prepared foods, artisan breads, and desserts made with wholesome and local ingredients.`,
    author: `info@mardybakery.com`,
    url: "http://www.mardybakery.com",
    keywords: "Mardy, Bakery, artisan breads, desserts, patisseries, lunch box",
    locality: "Charlestown",
    region: "Cornwall",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mardy Bakery website`,
        short_name: `Mardy Bakery website`,
        start_url: `/home`,
        background_color: `#FFB4AB`,
        theme_color: `#FFB4AB`,
        display: `minimal-ui`,
        icon: `src/components/assets/MBFaveIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
