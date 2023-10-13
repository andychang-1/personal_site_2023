// @flow
import * as React from "react";

type Props = {
  photos: string[],
};

export default function GalleryFromDir(props: Props): React.Node {
  const photos = props.photos;

  const photos3 = photos.map((photo) => <img key={photo} src={photo} />);
  return <div id="gallery">{photos3}</div>;
}
