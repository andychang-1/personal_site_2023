// @flow
import GalleryFromDir from "GalleryFromDir";

import * as React from "react";

export function CadoShelves(): React.Node {
  const photo1 = Object.keys(import.meta.glob("/assets/furniture/shelves/*"));
  const photo2 = Object.keys(import.meta.glob("/assets/furniture/shelves/1/*"));
  const photo3 = Object.keys(import.meta.glob("/assets/furniture/shelves/2/*"));

  return (
    <div id="subcontent">
      <b>Shelves</b>
      I produced a set of modular shelving from Oak, Mahogany, and Stainless
      Steel. I was inspired by "Cado shelves" as well as a brand called FRAMA
      CPH.
      <br />
      <br />
      The vertical supports have holes drilled into them, bolts go through those
      holes, then the shelves hang over the bolts. The vertical supports are 24"
      apart on center.
      <br />
      <br />
      The most difficult parts of this project were ripping the vertical pieces
      without a table saw. I did the "screw a circular saw under a table trick"
      <br />
      <br />
      Bending the wires consistently but manually with only a cheap bender was
      also a challenge.
      <GalleryFromDir photos={photo1} />
      <b>Detail shots of shelves but empty</b>
      <GalleryFromDir photos={photo2} />
      <b>Janky table saw and the brackets</b>
      <GalleryFromDir photos={photo3} />
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

export function BigFrame(): React.Node {
  const photos = Object.keys(import.meta.glob("/assets/furniture/bigframe/*"));
  return (
    <div id="subcontent">
      <b>Large mitered frame</b>
      On request, I made a friend a large mitered frame for a piece of artwork.
      <br />
      <br />
      Made from scrapwood.
      <br />
      <br />
      Mitered corners, reinforced with dowels. Hand cut miters. Not very
      precise, but I dont have any other options.
      <GalleryFromDir photos={photos} />
    </div>
  );
}

export function BroomHanger(): React.Node {
  const photos = Object.keys(
    import.meta.glob("/assets/furniture/broomhanger/*")
  );
  return (
    <div id="subcontent">
      <b>Broom hanger</b>
      Simple hand tool project to hang a broom from the wall
      <br />
      <br />
      Made from scrap oak, finished with oil based poly
      <GalleryFromDir photos={photos} />
    </div>
  );
}

export function DoorHangerBracket(): React.Node {
  const photos = Object.keys(
    import.meta.glob("/assets/furniture/doorhanger/*")
  );
  return (
    <div id="subcontent">
      <b>Door hanger bracket securer</b>
      Simple hand tool project.
      <br />
      <br />
      I have a hook that hangs in a bathroom door, when the door opens and
      closes, the hook swings back and forth. I made this bracket to keep it in
      place.
      <br />
      <br />
      Made from scrap oak, finished with oil based poly
      <GalleryFromDir photos={photos} />
    </div>
  );
}

export function DraftingTable(): React.Node {
  const photos = Object.keys(import.meta.glob("/assets/furniture/draft/*"));
  return (
    <div id="subcontent">
      <b>Drafting table</b>
      Stoop find and refinish
      <br />
      <br />
      I found this beautiful drafting table on the street. I scraped a lot of
      crud off of it and re-varnished it
      <br />
      <br />
      I then lent it to an artist, so if I ever take it back I'll probably have
      to scrape more crud off of it.
      <GalleryFromDir photos={photos} />
    </div>
  );
}

export function HatRack(): React.Node {
  const photos = Object.keys(import.meta.glob("/assets/furniture/hatrack/*"));
  return (
    <div id="subcontent">
      <b>Hat Rack</b>
      Simple hand tool project
      <br />
      <br />
      I made this hat rack from a piece of scrapwood, and extra IKEA drawer
      pulls
      <GalleryFromDir photos={photos} />
    </div>
  );
}

export function HeadBoard2(): React.Node {
  const photos = Object.keys(
    import.meta.glob("/assets/furniture/headboard2/*")
  );
  return (
    <div id="subcontent">
      <b>Headboard II</b>
      Scrap wood project
      <br />
      <br />
      I wanted a headboard to put behind a bed that didn't include one, so I
      made one that just leans against the wall.
      <br />
      <br />
      I have made another headboard in the past that actually attaches to the
      bed. Hence why this is Headboard II.
      <GalleryFromDir photos={photos} />
    </div>
  );
}
export function Stoops(): React.Node {
  return <>a</>;
}

export function Poster(): React.Node {
  const photos = Object.keys(import.meta.glob("/assets/furniture/poster/1/*"));
  const photos2 = Object.keys(import.meta.glob("/assets/furniture/poster/2/*"));

  return (
    <div id="subcontent">
      <b>Stooped Poster</b>
      Stoop project
      <br />
      <br />
      I found this interesting poster on the street at 3am. It had a cracked
      pane of glass that I replaced.
      <br />
      <br />
      In this project I learned how to cut glass. It was surprisingly easy even
      with just the $10 kit from Home Depot.
      <br />
      <br />
      I recommend making some test cuts before making the cuts to the final
      dimension needed. Better to mess up the trial runs than the real thing.
      <GalleryFromDir photos={photos} />
      <b>Glass cutting</b>
      <GalleryFromDir photos={photos2} />
    </div>
  );
}

export function Etc(): React.Node {
  const photos = Object.keys(
    import.meta.glob("/assets/furniture/_etc/bench/*")
  );
  const photos2 = Object.keys(
    import.meta.glob("/assets/furniture/_etc/vanity/*")
  );
  const photos3 = Object.keys(
    import.meta.glob("/assets/furniture/_etc/desk/*")
  );

  return (
    <div id="subcontent">
      <b>Etcetera</b>
      Projects that didn't turn out.
      <b>Weird bench</b>
      I found these bent aluminum pieces. I couldn't quite figure out what to do
      with them so I screwed them onto a piece of laminated plywood that was too
      thin, so it sagged in the middle.
      <GalleryFromDir photos={photos} />
      <b>Old Vanity</b>
      I found a beautiful old vanity, with glorious paint texture. It needed a
      bit too much work, and paint restoration seemed too specialized, so I
      passed.
      <GalleryFromDir photos={photos2} />
      <b>Weird desk</b>
      I found this weird desk without any legs. I put some legs on it but it
      ended up looking just wrong. The original "legs" were probably chests of
      drawers like the few still present
      <GalleryFromDir photos={photos3} />
    </div>
  );
}
