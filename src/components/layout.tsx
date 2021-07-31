import { MDXProvider } from "@mdx-js/react";
import * as React from "react";

export default ({ children }) =>
  <MDXProvider components={shortcodes}>{children}</MDXProvider>;

const shortcodes = { Die };

function Die({ sides }) {
  return <span className={`die d${sides}`}>d{sides}</span>;
}
