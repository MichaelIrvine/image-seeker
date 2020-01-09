import React from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class ImageItem extends React.Component {
  componentDidMount() {
    return this.props.searchImages("night");
  }

  renderList() {
    return this.props.searchedImages.data.results.map(image => {
      const backgroundImage = `url(${image.urls.small})`;
      return (
          <CSSTransition
            classNames="fade"
            key={image.id}
            in={true}
            appear={true}
            timeout={1200}
          >
          <li className="image-item" key={image.id}>
            <div className="background-image"style={{backgroundImage}}></div>
          </li>
          </CSSTransition>
          
      );
    });
  }

  render() {
    if (!this.props.searchedImages) {
      return <div>Nothing Yet</div>;
    }

    return (
      <TransitionGroup component="ul" className="image-list__grid-container" key={this.props.searchedImages.data.results.id}>
        {this.renderList()}
      </TransitionGroup>
    )
  }
}

const mapStateToProps = state => {
  return { searchedImages: state.searchedImages };
};

export default connect(mapStateToProps, { searchImages })(ImageItem);
