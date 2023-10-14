// @flow
import * as React from "react";

import { useRouteError } from "react-router-dom";

export default function ErrorPage(): React.Node {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="rightbar">
        <div id="namebar">
          <a href={`/`}>Andy Changs site</a>
        </div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </>
  );
}
