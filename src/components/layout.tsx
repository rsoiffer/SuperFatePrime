import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import * as React from "react";
import * as Style from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

type DieProps = { sides: number };

type TraitProps = { name: string };

export default ({ children }: LayoutProps) =>
  <MDXProvider components={shortcodes}>{children}</MDXProvider>;

const shortcodes = { Die, Link, Trait };

function Die({ sides }: DieProps) {
  return (
    <span className={dieClass(sides)}>
      <span className={Style.diePrefix}>d</span>
      {sides}
    </span>
  );
}

function dieClass(sides: number) {
  switch (sides) {
    case 4: return Style.d4;
    case 6: return Style.d6;
    case 8: return Style.d8;
    case 10: return Style.d10;
    case 12: return Style.d12;
    default: return "";
  }
}

function Trait({ name }: TraitProps) {
  return <span className={Style.trait}>{name}</span>;
}
