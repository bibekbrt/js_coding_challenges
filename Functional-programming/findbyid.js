function findById(arr, id) {
  return arr.find(item => item.id === id);
}

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

console.log(findById(arr, 2)); 
// { id: 2, name: "B" }