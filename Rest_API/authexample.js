(async function fetchWithAuth() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      headers: {
        "Authorization": "Bearer 12345",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (err) {
    console.error("Request failed:", err);
  }
})();
