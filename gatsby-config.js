module.exports = {
  siteMetadata: {
    title: `KC DETROIX`,
    description: `An amazing tech event organised by K.C College of Engineering and Management Studies and Research, Thane.`,
    author: "Sparsh Singh",
    keywords: ["KC Detroix", "KC", "KCCOE", "Detroix"],
    siteUrl: "https://kc-detroix.web.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `./static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 500 },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
