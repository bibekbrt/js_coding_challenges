function validateAge(age) {
  if (age < 0) {
    throw new Error("Invalid age: cannot be negative");
  }
}


try {
  validateAge(-1);
} catch (e) {
  console.error(e.message);
}