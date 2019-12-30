import React from 'react';
import { connect } from 'react-redux';
import { searchImages } from '../actions';


class ImageItem extends React.Component {

  componentDidMount() {
    this.props.searchImages();
  }

  renderList(){
    return this.props.searchedImages.data.results.map((image, index) => {
      return (
        <li className="image-item" key={index}>
          <img src={image.urls.small} alt={image.alt_description}/>
        </li>
      )
    })
  }

  render(){
    if(!this.props.searchedImages){
      return (
        <div>Nothing Yet</div>
      )
    }

    return (
      <div>
        ImageList
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { searchedImages: state.searchedImages };
};

export default connect(mapStateToProps, { searchImages })(ImageItem)