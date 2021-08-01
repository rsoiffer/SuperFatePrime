module.exports = {
  siteMetadata: {
    siteUrl: "https://rsoiffer.github.io/SuperFatePrime/",
    title: "SuperFate Prime",
  },
  pathPrefix: "/SuperFatePrime",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        remarkPlugins: [
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
