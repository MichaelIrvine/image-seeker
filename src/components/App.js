import "../sass/styles.scss";
import React from "react";

import ImageGrid from "./ImageList";
import SearchForm from "./SearchForm";

const App = () => {
  return (
    <div className="main_container">
      <div className="container__search-bar">
        <SearchForm />
      </div>
      
      <ImageGrid />
    </div>
  );
};

export default App;
