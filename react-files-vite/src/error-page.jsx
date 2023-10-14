// @flow
import * as React from "react";

import { useRouteError } from "react-router-dom";
import Root from "./routes/root";

export default function ErrorPage(): React.Node {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
