import React from "react";

function Table({ data, dataConfig }) {
  const { useState } = React;
  console.log(useState);
  const renderHeaders = dataConfig.map((each, index) => {
    return <th key={index}>{each.label}</th>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeaders}</tr>
      </thead>
      <tbody>
        {data.map((each, index) => {
          return (
            <tr className="border-b" key={index}>
              {dataConfig.map((eachData, index) => {
                return (
                  <td key={index} className="p-3">
                    {eachData?.render(each)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
