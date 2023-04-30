import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

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
      return { ...prev, selectedValue: option.label };
    });
  };
  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={() => dropHandler()}
      >
        {dropDownData.selectedValue
          ? dropDownData.selectedValue
          : "Select an option"}

        <GoChevronDown className="text-lg" />
      </div>
      {dropDownData.isDropOpen && (
        <div className="absolute top-full border rounded p-3 shadow  bg-white w-full">
          {options.map((each, index) => {
            return (
              <div
                className="hover:bg-sky-200 rounded cursor-pointer p-1"
                onClick={() => selectHandler(each)}
                key={each.value}
              >
                {each.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
