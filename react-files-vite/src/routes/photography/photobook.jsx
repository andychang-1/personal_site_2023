// @flow
import GalleryFromDir from "../../GalleryFromDir.jsx";

import * as React from "react";

const _photos = import.meta.glob(
  "/src/assets/photography/photobook2021/35mm/*.jpg"
);

export default function Photobook(): React.Node {
  const photos = Object.keys(_photos);
  return (
    <div id="subcontent">
      <b>Viscera</b>I put together a book of pictures I took until 2021. Across
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
      <b>Instax wide</b>
    </div>
  );
}
