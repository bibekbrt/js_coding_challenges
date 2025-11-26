function countWords(arr) {
  return arr.reduce((result, word) => {
    if (!result[word]) {
      result[word] = 1;   // first time seeing the word
    } else {
      result[word]++;     // already exists, increase count
    }
    return result;
  }, {});
}

const result =countWords(["apple", "banana", "apple"]);
console.log(result);
// { apple: 2, banana: 1 }