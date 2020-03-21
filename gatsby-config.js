module.exports = {
  siteMetadata: {
    title: `Bonhomme`,
    description: `Bonhomme`,
    author: `@pixelarts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@utils": "src/utils",
          "@components": "src/components",
          "@pages": "src/pages",
          "@atoms": "src/components/atoms",
          "@molecules": "src/components/molecules",
          "@organisms": "src/components/organisms",
          "@assets": "src/assets",
        },
        extensions: ["js", "jsx"],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bonhomme-gatsby-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
