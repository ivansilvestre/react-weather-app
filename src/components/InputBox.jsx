import React from "react";

const InputBox = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="form-control p-4 my-2"
      onChange={props.handleChange}
      value={props.value}
      onKeyPress={props.handlePress}
      autoFocus
    />
  );
};

export default InputBox;
