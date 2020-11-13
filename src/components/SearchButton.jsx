import React from "react";

const SearchButton = (props) => {
  return (
    <button
      className="btn btn-primary btn-block mt-2"
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
};

export default SearchButton;
