async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    // Extract names into an array
    return users.map(user => user.name);
  } catch (err) {
    console.error("Failed to fetch users:", err);
    return []; // return empty array on error
  }
}

// Example usage
getUser().then(names => console.log(names));