function getCity(user) {
  return user?.address?.currecty?.city ?? "unknown";
}


const user1 = {
  name: "Alice",
  address: {
    currecty: {
      city: "Paris"
    }
  }
};

const user2 = {
  name: "Bob"
};

console.log(getCity(user1)); // "Paris"
console.log(getCity(user2)); // "unknown"
console.log(getCity(null));  // "unknown"
