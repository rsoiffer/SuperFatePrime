module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SuperFate Prime",
  },

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",

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
