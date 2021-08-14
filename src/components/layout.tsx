import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { HTMLAttributes, ReactNode } from "react";
import * as React from "react";
import * as Style from "./layout.module.scss";

type LayoutProps = { children: ReactNode };

type DieProps = { sides: number };

type TraitProps = { name: string };

export default ({ children }: LayoutProps) =>
  <MDXProvider components={shortcodes}>{children}</MDXProvider>;

const shortcodes = {
  h2: H2,
  h3: H3,
  h4: H4,
  Die,
  Link,
  Trait
};

function withAnchor(id: string, children: ReactNode) {
  return (
    <>
      <a href={"#" + id} className={Style.anchorLink}>
        §
      </a>
      {" "}
      {children}
    </>
  );
}

function H2({ id, children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 id={id}>{withAnchor(id, children)}</h2>;
}

function H3({ id, children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 id={id}>{withAnchor(id, children)}</h3>;
}

function H4({ id, children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h4 id={id}>{withAnchor(id, children)}</h4>;
}

export function Die({ sides }: DieProps) {
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

export function Trait({ name }: TraitProps) {
  return <span className={Style.trait}>{name}</span>;
}

export function TopBar() {
  return (
    <div className={Style.topBar}>
      <div className={Style.topBarEntry}>Superfly Prime</div>
      <div className={Style.topBarRight}>
        <div className={Style.topBarEntry}>
          <Link to="/">Home</Link>
        </div>
        <div className={Style.topBarEntry}>
          <Link to="/powers">Powers</Link>
        </div>
        {/* <div className={Style.topBarEntry}>
          <Link to="/gm-section">GM Section</Link>
        </div> */}
      </div>
    </div>)
}