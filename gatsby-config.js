module.exports = {
  siteMetadata: {
    title: `Outyard`,
    description: `An independently organized hackathon at Uppsala University.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Outyard`,
        short_name: `Outyard`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
