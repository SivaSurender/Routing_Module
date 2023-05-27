const data = [
  { name: "Carrot", cost: 5, weigh: 10 },
  { name: "Tomato", cost: 2, weigh: 7 },
  { name: "Onion", cost: 10, weigh: 1 },
];

const getSortVal = (val) => val?.name;

data.sort((a, b) => {
  if (typeof (getSortVal(a) === "string")) {
    return getSortVal(a).localeCompare(getSortVal(b));
  }

  return getSortVal(a) - getSortVal(b);
});
