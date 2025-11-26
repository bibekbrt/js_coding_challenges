const original = {
  name: "Alice",
  details: {
    age: 30,
    address: {
      city: "Kathmandu",
      country: "Nepal"
    }
  }
};

// 1) Make a shallow copy using spread operator
const shallowCopy = { ...original };

// 2) Make a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify shallow copy
shallowCopy.name = "Bob";  // This only changes the top-level primitive
shallowCopy.details.age = 35;   // This changes nested object shared with original
shallowCopy.details.address.city = "Lalitpur";  // Also shared: nested reference

// Modify deep copy
deepCopy.name = "Charlie";  // changes only deep copy
deepCopy.details.age = 40;
deepCopy.details.address.city = "Pokhara";

// Log everything
console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);
