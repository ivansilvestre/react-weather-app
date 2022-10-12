import Button from "react-bootstrap/Button";

const SearchButton = (props) => (
  <Button
    variant="primary"
    onClick={props.onClick}
    {...props}
    disabled={props.disabled}
  />
);

export default SearchButton;
