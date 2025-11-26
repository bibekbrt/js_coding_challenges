function reverseArray(arr) {
  const result = [];

  for (const item of arr) {
    // Insert each item at the beginning
    result.unshift(item);
  }

  return result;
}


console.log(reverseArray([1, 2, 3, 4]));
// Output: [4, 3, 2, 1]


function reverseArrayAnotherway(arr) {
  const result = [];
  let index = arr.length - 1;

  for (const _ of arr) {
    result.push(arr[index]);
    index--;
  }

  return result;
}


console.log(reverseArrayAnotherway([1, 2, 3, 4]));
// Output: [4, 3, 2, 1]
