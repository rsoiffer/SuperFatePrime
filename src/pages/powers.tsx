import { graphql, PageProps, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout, { TopBar } from "../components/layout";
import * as styles from "../components/layout.module.scss";
import { Toc } from "../components/table-of-contents";

export default ({ data }: PageProps<any>) => {
  const powers = data.allFile.nodes[0].childMdx;
  const [tocOpen, setTocOpen] = React.useState(true);

  return (
    <Layout>
      <Helmet>
        <title>Superfly Prime</title>
      </Helmet>

      <TopBar />
      <Toc page={powers} tocOpen={tocOpen} setTocOpen={setTocOpen} />

      <div className={styles.mainContent
        + (tocOpen ? " " + styles.mainContentTocOpen : "")}>
        <MDXRenderer>{powers.body}</MDXRenderer>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "documents"}, name: {eq: "powers"}}) {
      nodes {
        childMdx {
          body
          tableOfContents
        }
      }
    }
  }
`;
