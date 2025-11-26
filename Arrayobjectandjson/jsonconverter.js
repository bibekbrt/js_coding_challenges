function safeParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    return "Invalid json";
  }
}


console.log(safeParse('{"name": "Alice"}'));
// { name: 'Alice' }

console.log(safeParse("{bad json"));
// "Invalid json"