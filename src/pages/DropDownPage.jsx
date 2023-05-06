import React from "react";
import Dropdown from "./UI/Dropdown";

function DropDownPage() {
  const options = [
    { label: "Timid crisp", value: "timid" },
    { label: "Hot N Spicy", value: "spicy" },
    { label: "mono mix", value: "mono" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Dropdown options={options} />
      <Dropdown options={options} />
    </div>
  );
}

export default DropDownPage;
