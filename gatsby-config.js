module.exports = {
  siteMetadata: {
    siteUrl: "https://rsoiffer.github.io/SuperflyPrime/",
    title: "Superfly Prime",
  },
  pathPrefix: "/SuperflyPrime",
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [
          require("remark-slug"),
          require("./plugins/remark-rpg")
        ]
      },
    },
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
        name: "documents",
        path: "./src/documents/",
      },
    },
  ],
};
