import Form from "react-bootstrap/Form";

const InputBox = (props) => {
  return (
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      className="p-4 my-2"
      onChange={props.handleChange}
      value={props.value}
      autoFocus
    />
  );
};

export default InputBox;
