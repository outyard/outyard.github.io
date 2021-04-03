module.exports = {
  siteMetadata: {
    title: 'Outyard',
    description: 'An independently organized hackathon at Uppsala University.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'videos',
        path: `${__dirname}/static/videos`,
      },
    },
  ],
}
