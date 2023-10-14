// @flow
import * as React from "react";

import GalleryFromDir from "GalleryFromDir";

const photos35mm = Object.keys(
  import.meta.glob("/assets/photography/twinksvsdolls/*")
);

export default function TwinksVsDolls(): React.Node {
  return (
    <div id="subcontent">
      <b>Twinks vs Dolls - June 24 2023</b>
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
    </div>
  );
}
