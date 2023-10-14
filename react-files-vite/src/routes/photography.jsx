// @flow
import GalleryFromDir from "GalleryFromDir.jsx";

import * as React from "react";

export function Photobook(): React.Node {
  // $FlowExpectedError[not-a-function]
  const _photos = import.meta.glob("/assets/photography/photobook2020/*");

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

export function Ttc1(): React.Node {
  const photos35mm = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc1/35mm/*")
  );

  const photosInstax = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc1/instax/*")
  );

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

export function Ttc2(): React.Node {
  const photos35mm = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc2/35mm/*")
  );

  const photosInstax = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc2/instax/*")
  );
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

export function Ttc3(): React.Node {
  const photos35mm = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc3/35mm/*")
  );

  const photosInstax = Object.keys(
    // $FlowExpectedError[not-a-function]
    import.meta.glob("/assets/photography/ttc3/instax/*")
  );
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

export function Viscera(): React.Node {
  // $FlowExpectedError[not-a-function]
  const _photos35mm = import.meta.glob("/assets/photography/viscera/35mm/*");
  // $FlowExpectedError[not-a-function]
  const _photosInstax = import.meta.glob(
    "/assets/photography/viscera/instax/*"
  );

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

export function TwinksVsDolls(): React.Node {
  const photos35mm = Object.keys(
    import.meta.glob("/assets/photography/twinksvsdolls/*")
  );
  return (
    <div id="subcontent">
      <b>Twinks vs Dolls - June 24 2023</b>
      <b>35mm</b>
      <GalleryFromDir photos={photos35mm} />
    </div>
  );
}
