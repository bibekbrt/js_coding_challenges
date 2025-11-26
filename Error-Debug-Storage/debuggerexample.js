function debugLoop() {
  const numbers = [1, 2, 3, 4, 5];

  for (let i = 0; i < numbers.length; i++) {
    debugger; // Execution will pause here each iteration
    console.log("Index:", i, "Value:", numbers[i]);
  }
}

debugLoop();
