// @flow
import * as React from "react";

type Props = {
  photos: string[],
};

export default function GalleryFromDir(props: Props): React.Node {
  const photos = props.photos;
  const photos3 = photos.map((src) => imageFromSource(src));
  return <div id="gallery">{photos3}</div>;
}

function imageFromSource(src: string): React.Node {
  return (
    <a key={src} href={src}>
      <img key={src} src={src} />
    </a>
  );
}
