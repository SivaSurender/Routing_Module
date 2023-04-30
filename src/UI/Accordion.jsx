import React, { useState } from "react";

function Accordion({ item }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div>
      {item.map((eachItem, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <div key={eachItem.id}>
            <div onClick={() => setExpandedIndex(isExpanded ? -1 : index)}>
              {eachItem.label}
            </div>
            {isExpanded && <div>{eachItem.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
