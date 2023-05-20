import React from "react";
import Table from "../UI/Table";
const data = [
  { name: "apple", color: "bg-red-500", score: 2 },
  { name: "orange", color: "bg-orange-500", score: 1 },
  { name: "banana", color: "bg-yellow-500", score: 3 },
  { name: "lime", color: "bg-green-500", score: 4 },
];

function TablePage() {
  return (
    <>
      <Table data={data} />
    </>
  );
}

export default TablePage;
