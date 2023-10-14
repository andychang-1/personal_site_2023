// @flow
import GalleryFromDir from "../../GalleryFromDir.jsx";

import * as React from "react";
// $FlowExpectedError[not-a-function]
const _photos = import.meta.glob("/assets/photography/photobook2020/*.jpg");

export default function Photobook(): React.Node {
  const photos = Object.keys(_photos);
  return (
    <div id="subcontent">
      <b>book</b>I put together a book of pictures I took between 2019 and 2020
      <GalleryFromDir photos={photos} />
    </div>
  );
}
