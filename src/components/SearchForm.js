import React from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";
import { ReactComponent as SearchIcon } from "../images/eyecon.svg";

class SearchForm extends React.Component {
  state = { value: "" };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchImages(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <SearchIcon className="eyecon" />
        <input
          className="search-bar"
          type="text"
          value={this.state.value}
          placeholder="Search Images"
          onChange={e =>
            this.setState({
              value: e.target.value
            })
          }
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { searchedImages: state.searchedImages };
};

export default connect(mapStateToProps, { searchImages })(SearchForm);
