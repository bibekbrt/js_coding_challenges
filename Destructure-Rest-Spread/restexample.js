//using reduce

function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

//using loop
function sumUsingLoop(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
//using foreach
function sumUsingForeach(...nums) {
  let total = 0;
  nums.forEach(num => total += num);
  return total;
}


console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum());                // 0


