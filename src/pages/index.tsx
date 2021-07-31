import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from '@mdx-js/react';
import * as React from "react";
import "./index.scss";

export default ({ data }) => {
  const rules = data.allFile.nodes[0].childMdx;

  return (
    <main>
      <h1>SuperFate Prime</h1>

      <MDXProvider components={shortcodes}>
        <MDXRenderer>{rules.body}</MDXRenderer>
      </MDXProvider>
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

const shortcodes = { Die };

function Die({ sides }) {
  return <span className={`die d${sides}`}>d{sides}</span>;
}
