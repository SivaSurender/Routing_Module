import React from "react";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((each, index) => {
          return (
            <tr key={index}>
              <td>{each.name}</td>
              <td>{each.color}</td>
              <td>{each.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
