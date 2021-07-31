import { Link } from "gatsby";
import * as React from "react";

export default function NotFoundPage() {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}
