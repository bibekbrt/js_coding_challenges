function getDayName(value) {
  const day = Number(value);

  switch (day) {
    case 1:
      return "Monday";

    case 2:
      // Intentional fall-through → case 3
    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
      return "Sunday";

    default:
      return "Invalid";
  }
}
console.log(getDayName(3)); // Wednesday
console.log(getDayName(2)); // Wednesday (intentional fall-through)
console.log(getDayName(7)); // Sunday
console.log(getDayName(10)); // Invalid