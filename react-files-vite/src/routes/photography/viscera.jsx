// @flow
import GalleryFromDir from "../../GalleryFromDir.jsx";

import * as React from "react";

const _photos35mm = import.meta.glob(
  "/src/assets/photography/viscera/35mm/*.jpg"
);
const _photosInstax = import.meta.glob(
  "/src/assets/photography/viscera/instax/*.jpg"
);

export default function Viscera(): React.Node {
  const photos35mm = Object.keys(_photos35mm);
  const photosInstax = Object.keys(_photosInstax);
  return (
    <div id="subcontent">
      <b>Viscera</b>A fashion show organized by Emile Osbourne and Vena Cava. I
      photographed it on 35mm film (Canon Elan 7) and Instax wide (Mint RF70)
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
      <b>Instax wide</b>
      <GalleryFromDir photos={photosInstax} />
    </div>
  );
}
