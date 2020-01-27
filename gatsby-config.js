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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/static/videos`,
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
        background_color: `#2b46ff`,
        theme_color: `#2b46ff`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
