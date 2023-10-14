// @flow
import GalleryFromDir from "GalleryFromDir";

import * as React from "react";

export function FryeBoots(): React.Node {
  const photos1 = Object.keys(
    import.meta.glob("/assets/clothes/fryeboots/before/*")
  );
  const photos2 = Object.keys(
    import.meta.glob("/assets/clothes/fryeboots/topy/*")
  );
  const photos3 = Object.keys(
    import.meta.glob("/assets/clothes/fryeboots/steel/*")
  );

  return (
    <div id="subcontent">
      <b>Frye Boots</b>
      {
        "I dyed, resoled (topy'd), and made a steel wrap for the heel of a pair of old frye boots. Dye was angelus, topy was a cheap brand. Steel was 18ga/1mm sheet stainless steel."
      }
      <b>Before/after</b>
      <GalleryFromDir photos={photos1} />
      <b>Resoling</b>
      <GalleryFromDir photos={photos2} />
      <b>Construction/attachment of the steel wrap</b>
      <GalleryFromDir photos={photos3} />
    </div>
  );
}

export function JpToolbox(): React.Node {
  return (
    <div id="subcontent">
      <b>Japanese woodworking toolbox</b>I made a japanese style woodworking
      toolbox out of scrapwood.
      <GalleryFromDir photos={["/assets/furniture/jptoolbox/jptoolbox.jpg"]} />
    </div>
  );
}
