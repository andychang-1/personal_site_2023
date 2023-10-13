import GalleryFromDir from "GalleryFromDir";
import React from "react";

// @ts-ignore
const _photos = import.meta.glob("/src/assets/photography/ttc1/*.jpg");

export default function Ttc1() {
  const photos = Object.keys(_photos);
  console.log(photos);
  return (
    <div id="subcontent">
      <b>Viscera</b>A fashion show organized by Emile Osbourne and Vena Cava. I
      photographed it on 35mm film (Canon Elan 7) and Instax wide (Mint RF70)
      <b>35mm</b>
      <GalleryFromDir photos={photos} />
      <b>Instax wide</b>
      <div id="gallery"></div>
    </div>
  );
}
