module.exports = {
  siteMetadata: {
    siteUrl: "https://rsoiffer.github.io/SuperFatePrime/",
    title: "SuperFate Prime",
  },

  pathPrefix: "/SuperFatePrime",

  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "rules",
        path: "./src/rules.mdx",
      },
    },
  ],
};
