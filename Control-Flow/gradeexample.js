function getGrade(score) {
  // Explicit type conversion
  const num = Number(score);

  // Validate input
  if (isNaN(num) || num < 0 || num > 100) {
    return "Invalid";
  }

  if (num >= 90 && num <= 100) {
    return "A";
  } else if (num >= 80 && num <= 89) {
    return "B";
  } else {
    return "Invalid"; // only A and B allowed per requirements
  }
}


console.log(getGrade(95));   // A
console.log(getGrade(85));   // B
console.log(getGrade(70));   // Invalid
console.log(getGrade(120));  // Invalid
console.log(getGrade("abc")); // Invalid