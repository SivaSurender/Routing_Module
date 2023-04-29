import React from "react";

function Accordion({ item }) {
  return (
    <div>
      {item.map((eachItem) => (
        <div key={eachItem.id}>
          <div>{eachItem.label}</div>
          <div>{eachItem.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
