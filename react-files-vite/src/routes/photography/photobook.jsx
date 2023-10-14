// @flow
import GalleryFromDir from "../../GalleryFromDir.jsx";

import * as React from "react";
// $FlowExpectedError[not-a-function]
const _photos = import.meta.glob("/assets/photography/photobook2020/*");

export default function Photobook(): React.Node {
  const photos = Object.keys(_photos);
  return (
    <div id="subcontent">
      <b>Photobook</b>I put together a book of pictures I took between 2019 and
      2020. Pictures were taken on 35mm film, DSLR, as well as iPhone.
      <GalleryFromDir
        photos={["/assets/photography/photobookmisc/image0.jpeg"]}
      />
      A picture of the whole thing, The cover is just simple ASCII art I
      designed The overlay without the color.
      <GalleryFromDir
        photos={["/assets/photography/photobookmisc/unknown.png"]}
      />
      <b>Images contained</b>
      <GalleryFromDir photos={photos} />
    </div>
  );
}

function singlePhoto(src: string): React.Node {}
