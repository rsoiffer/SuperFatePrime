import { Link } from "gatsby";
import * as React from "react";
import * as styles from "../components/layout.module.scss";

function renderTOC(elem, level) {
  var myClass = level == 1
    ? styles.toc1
    : level == 2
      ? styles.toc2
      : level == 3
        ? styles.toc3
        : styles.toc4;

  if ("items" in elem) {
    return <>
      <div className={myClass}>
        <Link to={elem.url}>{elem.title}</Link>
      </div>
      {elem.items.map(i => renderTOC(i, level + 1))}
    </>
  }
  return <div className={myClass}>
    <Link to={elem.url}>{elem.title}</Link>
  </div>
}

export function Toc({ page, tocOpen, setTocOpen }) {
  return (
    <>
      <div className={styles.tableOfContents
        + (tocOpen ? "" : (" " + styles.tableOfContentsClosed))}>
        <div className={styles.tableOfContentsHeader}>
          Table of Contents
                <button onClick={() => setTocOpen(false)}>
            <svg width="20" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Close Table of Contents"><path d="M11.9867 3H2.01172C1.48672 3 1.13672 3.35 1.13672 3.875C1.13672 4.4 1.48672 4.75 2.01172 4.75H12.0742C12.5992 4.75 12.9492 4.4 12.9492 3.875C12.9492 3.35 12.5117 3 11.9867 3Z" fill="currentColor"></path><path d="M15.4004 4.75H18.9879C19.5129 4.75 19.8629 4.4 19.8629 3.875C19.8629 3.35 19.5129 3 18.9879 3H15.4004C14.8754 3 14.5254 3.35 14.5254 3.875C14.5254 4.4 14.8754 4.75 15.4004 4.75Z" fill="currentColor"></path><path d="M11.9875 10.125H2.975L4.2875 8.81251C4.6375 8.46251 4.6375 7.93751 4.2875 7.58751C3.9375 7.23751 3.4125 7.23751 3.0625 7.58751L0.2625 10.3875C0.0875 10.5625 0 10.7375 0 11C0 11.2625 0.0875 11.4375 0.2625 11.6125L3.0625 14.4125C3.2375 14.5875 3.5 14.675 3.675 14.675C3.85 14.675 4.1125 14.5875 4.2875 14.4125C4.6375 14.0625 4.6375 13.5375 4.2875 13.1875L2.975 11.875H11.9875C12.5125 11.875 12.8625 11.525 12.8625 11C12.8625 10.475 12.5125 10.125 11.9875 10.125Z" fill="currentColor"></path><path d="M18.9874 10.125H15.3999C14.8749 10.125 14.5249 10.475 14.5249 11C14.5249 11.525 14.8749 11.875 15.3999 11.875H18.9874C19.5124 11.875 19.8624 11.525 19.8624 11C19.8624 10.475 19.5124 10.125 18.9874 10.125Z" fill="currentColor"></path><path d="M11.9867 17.25H2.01172C1.48672 17.25 1.13672 17.6 1.13672 18.125C1.13672 18.65 1.48672 19 2.01172 19H12.0742C12.5992 19 12.9492 18.65 12.9492 18.125C12.9492 17.6 12.5117 17.25 11.9867 17.25Z" fill="currentColor"></path><path d="M18.9879 17.25H15.4004C14.8754 17.25 14.5254 17.6 14.5254 18.125C14.5254 18.65 14.8754 19 15.4004 19H18.9879C19.5129 19 19.8629 18.65 19.8629 18.125C19.8629 17.6 19.5129 17.25 18.9879 17.25Z" fill="currentColor"></path></svg>
          </button>
        </div>
        {renderTOC(page.tableOfContents, 1)}
      </div>
      <div className={styles.openTocButton}>
        <button onClick={() => setTocOpen(true)}>
          <svg width="21" height="100%" viewBox="0 0 21 25" fill="none" role="img" aria-label="Table of Contents" xmlns="http://www.w3.org/2000/svg"><path d="M19.8882 0H1.11176C0.494118 0 0 0.487805 0 1.09756V23.9024C0 24.5122 0.494118 25 1.11176 25H19.8882C20.5059 25 21 24.5122 21 23.9024V1.09756C21 0.487805 20.5059 0 19.8882 0ZM18.7765 22.8049H2.34706V18.5366H11.5C12.1176 18.5366 12.6118 18.0488 12.6118 17.439C12.6118 16.8293 12.1176 16.3415 11.5 16.3415H2.34706V13.7805H11.5C12.1176 13.7805 12.6118 13.2927 12.6118 12.6829C12.6118 12.0732 12.1176 11.3415 11.5 11.3415H2.34706V8.78049H14.2941C14.9118 8.78049 15.4059 8.29268 15.4059 7.68293C15.4059 7.07317 14.9118 6.46342 14.2941 6.46342H2.34706V2.31707H18.7765V22.8049Z" fill="currentColor"></path></svg>
        </button>
      </div>
    </>)
}