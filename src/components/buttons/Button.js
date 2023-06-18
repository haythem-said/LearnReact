import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

const ButtonComponent = ({ text, path }) => {
  return (
    <Link to={path}>
      <Button className="btn-component">{text}</Button>
    </Link>
  );
};

export default ButtonComponent;
