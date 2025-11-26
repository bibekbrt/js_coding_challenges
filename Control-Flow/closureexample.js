function createCounter() {
  let count = 0; // private variable, not accessible from outside

  return {
    increment: function() {
      count++;
    },
    get: function() {
      return count;
    }
  };
}


const counter = createCounter();

console.log(counter.get()); // 0
counter.increment();
console.log(counter.get()); // 1
counter.increment();
counter.increment();
console.log(counter.get()); // 3

// Another counter instance is independent
const counter2 = createCounter();
console.log(counter2.get()); // 0