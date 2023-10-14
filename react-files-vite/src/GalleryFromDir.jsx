// @flow
import * as React from "react";

type Props = {
  photos: string[],
};

export default function GalleryFromDir(props: Props): React.Node {
  const photos = props.photos;

  if (photos.length == 1) {
    return imageFromSource(photos[0], "single");
  }

  if (photos.length == 2) {
    const photos3 = photos.map((src) => imageFromSource(src, "duo"));
    return <div id="gallery">{photos3}</div>;
  }

  const photos3 = photos.map((src) => imageFromSource(src, "multi"));
  return <div id="gallery">{photos3}</div>;
}

function imageFromSource(src: string, id: ?string): React.Node {
  return (
    <div class={id}>
      <a key={src} href={src} id={id}>
        <img key={src} src={src} />
      </a>
    </div>
  );
}
