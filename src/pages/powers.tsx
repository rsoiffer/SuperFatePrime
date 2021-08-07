import { graphql, PageProps, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../components/layout.module.scss";

export default ({ data }: PageProps<any>) => {
  const powers = data.allFile.nodes[0].childMdx;

  return (
    <Layout>
      <Helmet>
        <title>Superfly Prime</title>
      </Helmet>


      <div className={styles.topBar}>
        <div className={styles.topBarEntry}>Superfly Prime</div>
        <div className={styles.topBarRight}>
          <div className={styles.topBarEntry}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.topBarEntry}>
            <Link to="powers">Powers</Link>
          </div>
          <div className={styles.topBarEntry}>
            <Link to="rules">Rules</Link>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
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
        }
      }
    }
  }
`;
