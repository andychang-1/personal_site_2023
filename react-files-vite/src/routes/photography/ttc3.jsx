// @flow
import * as React from "react";

import GalleryFromDir from "GalleryFromDir";

const photos35mm = Object.keys(
  import.meta.glob("/src/assets/photography/ttc3/35mm/*.jpg")
);

const photosInstax = Object.keys(
  import.meta.glob("/src/assets/photography/ttc3/instax/*.jpg")
);

export default function Ttc3(): React.Node {
  return (
    <div id="subcontent">
      <b>Things to Come III - July 13 2023</b>
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
      <b>Instax wide</b>
      <GalleryFromDir photos={photosInstax} />
    </div>
  );
}
