async function createPost(title, body) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdPost = await response.json();
    return createdPost;
  } catch (err) {
    console.error("Failed to create post:", err);
    return null;
  }
}

// Example usage
createPost("My New Post", "This is the body of my post.")
  .then(post => console.log(post));