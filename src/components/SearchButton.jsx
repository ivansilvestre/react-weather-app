import Button from "react-bootstrap/Button";

const SearchButton = (props) => (
  <Button
    variant="primary"
    onClick={props.onClick}
    {...props}
    type="submit"
    className="my-2"
  />
);

export default SearchButton;
