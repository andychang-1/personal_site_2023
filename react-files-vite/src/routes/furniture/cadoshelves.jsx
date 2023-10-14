// @flow
import GalleryFromDir from "../../GalleryFromDir.jsx";

import * as React from "react";

const _photos = import.meta.glob("/src/assets/furniture/shelves/*.jpg");

export default function CadoShelves(): React.Node {
  const photos = Object.keys(_photos);
  return (
    <div id="subcontent">
      <b>Shelves</b>I produced a set of modular shelving from Oak, Mahogany, and
      Stainless Steel. I was inspired by "Cado shelves" as well as a brand
      called FRAMA CPH
      <GalleryFromDir photos={photos} />
    </div>
  );
}
