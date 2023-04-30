import React, { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ item }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handeAccordion = function (incomingIndex) {
    setExpandedIndex((prev) => {
      return incomingIndex !== prev ? incomingIndex : -1;
    });
  };

  return (
    <div className="border-x border-t rounded">
      {item.map((eachItem, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <div key={eachItem.id}>
            <div
              className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
              onClick={() => handeAccordion(index)}
            >
              <span>{eachItem.label}</span>
              <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
            </div>
            {isExpanded && (
              <div className="border-b p-5">{eachItem.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
