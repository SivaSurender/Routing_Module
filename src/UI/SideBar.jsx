import React from "react";
import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Acccordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "DropDown", path: "/" },
  ];
  return (
    <div>
      {links.map((each, index) => {
        return (
          <div key={index} className="sticky top-0  flex flex-col items-start">
            <Link className="mb-3" to={each.path}>
              {each.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
