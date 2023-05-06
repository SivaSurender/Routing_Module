import React from "react";
import { useNavigation } from "../context/Context";

function Link({ children, to }) {
  const { navigateHandler } = useNavigation();
  const linkHandler = (event) => {
    !event.ctrlKey && !event.metaKey && event.preventDefault();
    navigateHandler(to);
  };
  return (
    <a href={to} onClick={() => linkHandler(event)}>
      {children}
    </a>
  );
}

export default Link;
