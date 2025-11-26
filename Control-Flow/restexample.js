function sumAll(...nums) {
  let total = 0;

  for (const n of nums) {
    total += n;
  }

  return total;
}



console.log(sumAll(1, 2, 3));         // 6
console.log(sumAll(10, 20, 30, 40));  // 100
console.log(sumAll());    