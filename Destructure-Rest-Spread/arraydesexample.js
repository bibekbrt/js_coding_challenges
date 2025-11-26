function pickElements(arr) {
  const [first = 0, , third = 0] = arr;
  return { first, third };
}

console.log(pickElements([10, 20, 30]));
// { first: 10, third: 30 }

console.log(pickElements([5]));
// { first: 5, third: 0 }

console.log(pickElements([]));
// { first: 0, third: 0 }

console.log(pickElements([7, 8]));
// { first: 7, third: 0 }


