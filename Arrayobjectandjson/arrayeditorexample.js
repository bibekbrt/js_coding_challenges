function arrayEditor(arr) {
  // 1. push 10 at the end
  arr.push(10);

  // 2. unshift 5 at the beginning
  arr.unshift(5);

  // 3. remove last element (pop)
  arr.pop();

  // 4. splice at index 1, remove 1 item
  arr.splice(1, 1);

  return arr;
}


console.log(arrayEditor([1, 2, 3]));
// Step by step:
// Original: [1, 2, 3]
// push 10: [1, 2, 3, 10]
// unshift 5: [5, 1, 2, 3, 10]
// pop(): [5, 1, 2, 3]
// splice(1, 1): [5, 2, 3]
// Output: [5, 2, 3]