async function getUserId(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (err) {
    return err; // return error object
  }
}

getUserId(1).then(result => console.log(result));

