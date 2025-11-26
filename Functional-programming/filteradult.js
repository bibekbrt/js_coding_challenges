function filterAdults(users) {
  return users.filter(user => user.age > 18);
}

const users = [
  { name: "A", age: 17 },
  { name: "B", age: 20 }
];

console.log(filterAdults(users));
// Output: [ { name: "B", age: 20 } ]
