import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";

export default function IndexPage({ data }) {
  const rules = data.allFile.nodes[0].childMdx;

  return (
    <main>
      <h1>SuperFate Prime</h1>
      <MDXRenderer>{rules.body}</MDXRenderer>
    </main>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "rules"}}) {
      nodes {
        childMdx {
          body
        }
      }
    }
  }
`;
