import React from "react";
import { Gallery } from "react-grid-gallery";

import viscera35mm1 from "assets/photography/viscera/35mm/viscera1.jpg";
import viscera35mm2 from "assets/photography/viscera/35mm/viscera2.jpg";
import viscera35mm3 from "assets/photography/viscera/35mm/viscera3.jpg";
import viscera35mm4 from "assets/photography/viscera/35mm/viscera4.jpg";
import viscera35mm5 from "assets/photography/viscera/35mm/viscera5.jpg";
import viscera35mm6 from "assets/photography/viscera/35mm/viscera6.jpg";
import viscera35mm7 from "assets/photography/viscera/35mm/viscera7.jpg";
import viscera35mm8 from "assets/photography/viscera/35mm/viscera8.jpg";
import viscera35mm9 from "assets/photography/viscera/35mm/viscera9.jpg";
import viscera35mm10 from "assets/photography/viscera/35mm/viscera10.jpg";
import viscera35mm11 from "assets/photography/viscera/35mm/viscera11.jpg";
import viscera35mm12 from "assets/photography/viscera/35mm/viscera12.jpg";
import viscera35mm13 from "assets/photography/viscera/35mm/viscera13.jpg";
import viscera35mm14 from "assets/photography/viscera/35mm/viscera14.jpg";
import viscera35mm15 from "assets/photography/viscera/35mm/viscera15.jpg";

import visceraInstax1 from "assets/photography/viscera/instax/viscera1.jpg";
import visceraInstax2 from "assets/photography/viscera/instax/viscera2.jpg";
import visceraInstax3 from "assets/photography/viscera/instax/viscera3.jpg";
import visceraInstax4 from "assets/photography/viscera/instax/viscera4.jpg";
import visceraInstax5 from "assets/photography/viscera/instax/viscera5.jpg";
import visceraInstax6 from "assets/photography/viscera/instax/viscera6.jpg";
import visceraInstax7 from "assets/photography/viscera/instax/viscera7.jpg";
import visceraInstax8 from "assets/photography/viscera/instax/viscera8.jpg";

export default function Viscera() {
  return (
    <div id="subcontent">
      <b>Viscera</b>A fashion show organized by Emile Osbourne and Vena Cava. I
      photographed it on 35mm film (Canon Elan 7) and Instax wide (Mint RF70)
      <b>35mm</b>
      <div id="gallery">
        <img src={viscera35mm1} />
        <img src={viscera35mm2} />
        <img src={viscera35mm3} />
        <img src={viscera35mm4} />
        <img src={viscera35mm5} />
        <img src={viscera35mm6} />
        <img src={viscera35mm7} />
        <img src={viscera35mm8} />
        <img src={viscera35mm9} />
        <img src={viscera35mm10} />
        <img src={viscera35mm11} />
        <img src={viscera35mm12} />
        <img src={viscera35mm13} />
        <img src={viscera35mm14} />
        <img src={viscera35mm15} />
      </div>
      <b>Instax wide</b>
      <div id="gallery">
        <img src={visceraInstax1} />
        <img src={visceraInstax2} />
        <img src={visceraInstax3} />
        <img src={visceraInstax4} />
        <img src={visceraInstax5} />
        <img src={visceraInstax6} />
        <img src={visceraInstax7} />
        <img src={visceraInstax8} />
      </div>
    </div>
  );
}
