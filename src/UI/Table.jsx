import React from "react";

function Table({ data, dataConfig }) {
  const renderHeaders = dataConfig.map((each, index) => {
    return <th key={index}>{each.label}</th>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {/* <th>Fruit</th>
          <th>Color</th>
          <th>Score</th> */}
          {renderHeaders}
        </tr>
      </thead>
      <tbody>
        {data.map((each, index) => {
          return (
            <tr className="border-b" key={index}>
              <td className="p-3">{each.name}</td>
              <td className="p-3">
                <div className={`p-3 m-2 ${each.color}`}></div>
              </td>
              <td className="p-3">{each.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
