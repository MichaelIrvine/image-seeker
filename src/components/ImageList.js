import React from "react";

import ImageItem from "./ImageItem";

class ImageList extends React.Component {
  render() {
    return (
      <div className="container__image-list">
        <ImageItem />
      </div>
    );
  }
}

export default ImageList;
