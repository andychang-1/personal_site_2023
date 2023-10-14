// @flow
import GalleryFromDir from "GalleryFromDir.jsx";

import * as React from "react";


const photos35mm = Object.keys(
  // $FlowExpectedError[not-a-function]
  import.meta.glob("/src/assets/photography/ttc2/35mm/*.jpg")
);

const photosInstax = Object.keys(
    // $FlowExpectedError[not-a-function]
  import.meta.glob("/src/assets/photography/ttc2/instax/*.jpg")
);

export default function Ttc2(): React.Node {
  return (
    <div id="subcontent">
      <b>Things to Come I - May 18 2023</b>
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
      <b>Instax wide</b>
      <GalleryFromDir photos={photosInstax} />
    </div>
  );
}
