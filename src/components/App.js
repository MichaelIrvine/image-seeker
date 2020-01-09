import "../sass/styles.scss";
import React from "react";
import { CSSTransition } from "react-transition-group";

import ImageGrid from "./ImageList";
// import SearchForm from "./SearchForm";
import SearchFormRedux from "./SearchFormRedux";

const App = () => {
  return (
    <div className="main_container">
      <CSSTransition classNames="fade" in={true} appear={true} timeout={1900}>
        <div className="container__title">
          <h1>Image Seeker</h1>
        </div>
      </CSSTransition>
      <CSSTransition classNames="fade" in={true} appear={true} timeout={2200}>
      <div className="container__search-bar">
        <SearchFormRedux />
      </div>
      </CSSTransition>
      <ImageGrid />
    </div>
  );
};

export default App;
