const arr = [1, 2, 3, 4];

const sumOfSquaresEven = arr
  .map(n => n * n)        // square all numbers
  .filter(n => Math.sqrt(n) % 2 === 0) // keep squares of even numbers
  .reduce((sum, n) => sum + n, 0);   // sum them

console.log(sumOfSquaresEven); // 20


const sumOfSquaresEvenAnother = [1, 2, 3, 4]
  .filter(n => n % 2 === 0)     // keep only even numbers
  .map(n => n * n)              // square them
  .reduce((sum, n) => sum + n, 0); // sum the squares

console.log(sumOfSquaresEvenAnother); // 20