import React from "react";
import Table from "../UI/Table";
const data = [
  { name: "apple", color: "bg-red-500", score: 2 },
  { name: "orange", color: "bg-orange-500", score: 1 },
  { name: "banana", color: "bg-yellow-500", score: 3 },
  { name: "lime", color: "bg-green-500", score: 4 },
];

const dataConfig = [
  { label: "Name", render: (fruit) => fruit.name },
  { label: "Color", render: (fruit) => fruit.color },
  { label: "Score", render: (fruit) => fruit.score },
];

function TablePage() {
  return (
    <>
      <Table data={data} dataConfig={dataConfig} />
    </>
  );
}

export default TablePage;
