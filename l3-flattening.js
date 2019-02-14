let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];

let flatten = arrays.reduce((acc, current) => {
  console.log(acc, current);
  return acc.concat(current);
}, []);
console.log(flatten);
