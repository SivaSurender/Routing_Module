import React from "react";
import { useNavigation } from "../context/Context";

function Link({ children, to }) {
  const { navigateHandler } = useNavigation();
  const linkHandler = (event) => {
    event.preventDefault();
    navigateHandler(to);
  };
  return <a onClick={() => linkHandler(event)}>{children}</a>;
}

export default Link;
