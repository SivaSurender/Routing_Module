import React, { useState } from "react";

function Dropdown({ options }) {
  const [dropDownData, setDropDownData] = useState({ isDropOpen: false });

  const dropHandler = function () {
    setDropDownData((prev) => {
      return { ...prev, isDropOpen: !prev.isDropOpen };
    });
  };
  return (
    <div>
      <div onClick={() => dropHandler()}>Select an option</div>
      {dropDownData.isDropOpen &&
        options.map((each, index) => {
          return <div key={each.value}>{each.label}</div>;
        })}
    </div>
  );
}

export default Dropdown;
