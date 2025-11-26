function createUser(id, name, age) {
  return {
    ['user_id']: id,
    ['user_name']: name,
    ['user_age']: age
  };
}

console.log(createUser(101, "Alice", 25));
// Output: { user_id: 101, user_name: 'Alice', user_age: 25 }

console.log(createUser(202, "Bob", 30));
// Output: { user_id: 202, user_name: 'Bob', user_age: 30 }

function createUserDynamic(prefix, id, name, age) {
  return {
    [`${prefix}_id`]: id,
    [`${prefix}_name`]: name,
    [`${prefix}_age`]: age
  };
}

console.log(createUserDynamic('user', 101, 'Alice', 25));
// { user_id: 101, user_name: 'Alice', user_age: 25 }


console.log(createUserDynamic('user', 101, 'Alice', 25));
// { user_id: 101, user_name: 'Alice', user_age: 25 }