// @flow
import * as React from "react";

import GalleryFromDir from "GalleryFromDir";

const photos35mm = Object.keys(
  // $FlowExpectedError[not-a-function]
  import.meta.glob("/src/assets/photography/ttc1/35mm/*.jpg")
);

const photosInstax = Object.keys(
  // $FlowExpectedError[not-a-function]
  import.meta.glob("/src/assets/photography/ttc1/instax/*.jpg")
);

export default function Ttc1(): React.Node {
  return (
    <div id="subcontent">
      <b>Things to Come I - March 16 2023</b>
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
      <b>Instax wide</b>
      <GalleryFromDir photos={photosInstax} />
    </div>
  );
}
