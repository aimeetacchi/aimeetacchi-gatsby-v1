module.exports = {
  siteMetadata: {
    title: `Aimee Tacchi | Front End Developer`,
    description: `I'm Aimee a Front-end developer from Dunstable, Bedfordshire, UK. I create beautiful stylish responsive websites and Javascript apps.`,
    siteName: '> _Aimee Tacchi',
    author: `Aimee Tacchi`,
    siteUrl: `https://aimeesgatsby.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
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
        icon: `src/icons/favicon.ico`,
        icons: [
          {
            src: `/icons/apple-touch-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/icons/apple-touch-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
