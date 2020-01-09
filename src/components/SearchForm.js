import React from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";
import { Field, reduxForm } from "redux-form";
import { ReactComponent as SearchIcon } from "../images/eyecon.svg";

class SearchFormRedux extends React.Component {
  onSubmit = formValues => {
    this.props.searchImages(formValues);
    this.props.reset();
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <span className="error-message">{error}</span>;
    }
  }

  renderInput = ({ input, meta }) => {
    return (
      <div className="search-component_wrapper">
        <div className="search-bar_wrapper">
          <SearchIcon className="eyecon" />
          <input
            {...input}
            placeholder="Search Images"
            className="search-bar"
          />
        </div>
        <div className="error_wrapper">{this.renderError(meta)}</div>
      </div>
    );
  };

  render() {
    return (
      <form
        className="search-form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="search" component={this.renderInput} />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.search) {
    errors.search = "Enter something to search for";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "Image Search",
  validate
})(SearchFormRedux);

export default connect(null, { searchImages })(formWrapped);
