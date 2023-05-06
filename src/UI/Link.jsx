import React from "react";
import { useNavigation } from "../context/Context";

function Link({ children, to, className }) {
  const { navigateHandler, currentPath } = useNavigation();

  const linkHandler = (event) => {
    // condition to enable default sys behavior when ctrl or comman button is pressed and link is clicked to allow it to open in new tab
    !event.ctrlKey && !event.metaKey && event.preventDefault();
    navigateHandler(to);
  };

  // active class syntax

  const activeClass = "font-bold border-l-4 border-blue-500 pl-2";
  return (
    <a
      className={`text-blue-500 ${className} ${
        currentPath === to && activeClass
      }`}
      href={to}
      onClick={() => linkHandler(event)}
    >
      {children}
    </a>
  );
}

export default Link;
