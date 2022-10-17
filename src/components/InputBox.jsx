import { forwardRef } from "react";
import Form from "react-bootstrap/Form";

const InputBox = forwardRef((props, ref) => {
  return (
    <Form.Control
      type="text"
      placeholder={"City Name"}
      className="p-4 my-2"
      autoFocus
      ref={ref}
      required
    />
  );
});

export default InputBox;
