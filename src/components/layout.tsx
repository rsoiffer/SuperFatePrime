import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

export default ({ children }) =>
  <MDXProvider components={shortcodes}>{children}</MDXProvider>;

const shortcodes = { Die, Trait };

function Die({ sides }) {
  return (
    <span className={`die d${sides}`}>
      <span className="die-prefix">d</span>
      {sides}
    </span>
  );
}

function Trait({ name }) {
  return <span className="trait">{name}</span>;
}
