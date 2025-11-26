const person = {
  firstname: "jhone",
  address: {
    city: "kathmandu"
  }
};



const {
  firstname: name,
  address: { city }
} = person;


console.log(name); // "jhone"
console.log(city); // "kathmandu"


