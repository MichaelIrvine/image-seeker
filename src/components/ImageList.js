import React from "react";

import ImageItem from './ImageItem';

class ImageList extends React.Component {
  

  render() {

    return (
      <div>
        <div>
          <h1>Images</h1>
        </div>
        <div>
          <ImageItem />
        </div>
      </div>
    );
  }
}

export default ImageList;
