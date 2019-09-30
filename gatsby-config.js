const autoprefixer = require('autoprefixer')
const mqPacker = require('css-mqpacker') // compresses media queries into a single query
const cssnano = require('css-mqpacker') // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.principlesofwealth.net`,
    title: `Principles of wealth`,
    description: `Because reading is faster than listening`,
    twitter_handle: `@flowen_nl`,
    keywords:
      'Naval, Ravikant, Naval Ravikant, Principles of wealth, how to get rich, podcast, summary',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/data/chapters`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              backgroundColor: 'rgb(236, 155, 155)',
              // wrapperStyle: 'position: absolute;',
              quality: 70,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      // options: {
      //   excludePattern: /(excluded-link|external)/,
      // },
    },
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
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `principles-of-wealth`,
        short_name: `wealth`,
        start_url: `/`,
        background_color: `#412779`,
        theme_color: `#412779`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-146765178-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
