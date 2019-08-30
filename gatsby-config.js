const autoprefixer = require('autoprefixer')
const mqPacker = require('css-mqpacker') // compresses media queries into a single query
const cssnano = require('css-mqpacker') // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.principlesofwealth.net`,
    title: `Principles of wealth`,
    description: `Because reading is faster than listening`,
    twitter_handle: `@flowen_nl`,
    keywords: 'Naval, Ravikant, Naval Ravikant, Principles of wealth, how to get rich',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              `default`,
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `principles-of-wealth`,
        short_name: `wealth`,
        start_url: `/`,
        background_color: `#412779`,
        theme_color: `#EC9B9B`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Abhaya Libre`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-146765178-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}