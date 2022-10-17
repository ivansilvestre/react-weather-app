import Button from "react-bootstrap/Button";

const SearchButton = (props) => (
  <Button
    {...props}
    variant="primary"
    onClick={props.onClick}
    type="submit"
    className="my-2"
  />
);

export default SearchButton;
