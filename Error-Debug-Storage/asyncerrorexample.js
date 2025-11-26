async function fetchData() {
  try {
    const res = await fetch("https://abc-url.example");
    return await res.json();
  } catch (err) {
    return "failed";
  }
}
fetchData().then(result => console.log(result));
