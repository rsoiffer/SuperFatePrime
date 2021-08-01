import { MDXProvider } from "@mdx-js/react";
import * as React from "react";
import * as Style from "./layout.module.scss";

export default ({ children }) =>
  <MDXProvider components={shortcodes}>{children}</MDXProvider>;

const shortcodes = { Die, Trait };

function Die({ sides }) {
  return (
    <span className={dieClass(sides)}>
      <span className={Style.diePrefix}>d</span>
      {sides}
    </span>
  );
}

function dieClass(sides: number): string {
  switch (sides) {
    case 4: return Style.d4;
    case 6: return Style.d6;
    case 8: return Style.d8;
    case 10: return Style.d10;
    case 12: return Style.d12;
    default: return "";
  }
}

function Trait({ name }) {
  return <span className={Style.trait}>{name}</span>;
}
