import { graphql, PageProps, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout, { TopBar } from "../components/layout";
import * as styles from "../components/layout.module.scss";
import { Toc } from "../components/table-of-contents";
import YAMLData from "../data/example-npcs.yaml";
import { Die, Trait } from "../components/layout";

function traitEntry(trait) {
  const tokens = trait.split(/\b(?=d[1-9][0-9]*)|(?<=d[1-9][0-9]*)\b/);

  return <div className={styles.traitSetEntry}>
    {tokens.map(token => {
      const die = token.match(/^d([1-9][0-9]*)$/);

      return die === null
        ? <Trait name={token} />
        : <Die sides={parseInt(die[1])} />
    })}
  </div>;
}

export default ({ data }: PageProps<any>) => {
  const gm_section = data.allFile.nodes[0].childMdx;
  const [tocOpen, setTocOpen] = React.useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Superfly Prime</title>
      </Helmet>

      <TopBar />
      <Toc page={gm_section} tocOpen={tocOpen} setTocOpen={setTocOpen} />

      <div className={styles.mainContent
        + (tocOpen ? " " + styles.mainContentTocOpen : "")}>
        <MDXRenderer>{gm_section.body}</MDXRenderer>

        {YAMLData.characters.map((char, index) => {
          return <div className={styles.character}>
            <h3>{char.name}</h3>

            <h4>Distinctions</h4>
            <div className={styles.traitSet}>
              {char.distinctions.map((trait, index) => {
                return traitEntry(trait)
              })}
            </div>

            <h4>Approaches</h4>
            <div className={styles.traitSet}>
              {char.approaches.map((trait, index) => {
                return traitEntry(trait)
              })}
            </div>

            <h4>Powers</h4>
            <div className={styles.traitSet}>
              {char.powers.length != 0
                ? char.powers.flatMap((powerset, index) => {
                  return [
                    <div className={styles.traitSetDesc}>{powerset.desc}</div>,
                    <div className={styles.traitSetLimit}>Limitation: {powerset.limit}</div>,
                    powerset.traits.map((trait, index) => {
                      return traitEntry(trait)
                    })
                  ]
                })
                : <i>None</i>}
            </div>

            <h4>Specialties</h4>
            <div className={styles.traitSet}>
              {char.specialties.length != 0
                ? char.specialties.map((trait, index) => {
                  return traitEntry(trait)
                })
                : <i>None</i>}
            </div>

            <h4>Resources</h4>
            <div className={styles.traitSet}>
              {char.resources.length != 0
                ? char.resources.map((trait, index) => {
                  return traitEntry(trait)
                })
                : <i>None</i>}
            </div>
          </div>
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "documents"}, name: {eq: "gm-section"}}) {
      nodes {
        childMdx {
          body
          tableOfContents
        }
      }
    }
  }
`;
