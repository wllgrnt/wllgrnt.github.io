module.exports = {
  siteMetadata: {
    title: `Will and Christina's Wedding`,
    description: `Gatsby save-the-date website, built off the default starter.`,
    author: `@wllgrnt`,
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About the Venues',
        link:'/venues'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        icon: `${__dirname}/src/images/ring.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ring.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-103801480-2",
        head: true,
      },
    },    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
