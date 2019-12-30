import React from "react";
import { connect } from "react-redux";
import { searchImages } from '../actions';

class SearchForm extends React.Component {
  state = { value: '' };

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.searchImages(this.state.value);
      this.setState({value: ''});
  }

  render() {

      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={e => this.setState({
                value: e.target.value
              })}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

const mapStateToProps = state => {
  return { searchedImages: state.searchedImages };
}

export default connect(mapStateToProps, {searchImages})(SearchForm);
