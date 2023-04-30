import React, { useState } from "react";

function Dropdown({ options }) {
  const [dropDownData, setDropDownData] = useState({
    isDropOpen: false,
    selectedValue: "",
  });

  const dropHandler = function () {
    setDropDownData((prev) => {
      return { ...prev, isDropOpen: !prev.isDropOpen };
    });
  };

  const selectHandler = function (option) {
    setDropDownData((prev) => {
      return { ...prev, isDropOpen: false };
    });

    setDropDownData((prev) => {
      return { ...prev, selectedValue: [option.label] };
    });
  };
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={() => dropHandler()}>
        {dropDownData.selectedValue.length <= 0
          ? "Select an option"
          : dropDownData.selectedValue}
      </div>
      {dropDownData.isDropOpen &&
        options.map((each, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => selectHandler(each)}
              key={each.value}
            >
              {each.label}
            </div>
          );
        })}
    </div>
  );
}

export default Dropdown;
