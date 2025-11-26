async function fetchPostsAndComments() {
  try {
    // Start both fetch requests in parallel
    const [postsRes, commentsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments")
    ]);

    // Check for errors
    if (!postsRes.ok) throw new Error(`Posts fetch failed: ${postsRes.status}`);
    if (!commentsRes.ok) throw new Error(`Comments fetch failed: ${commentsRes.status}`);

    // Parse JSON in parallel as well
    const [posts, comments] = await Promise.all([
      postsRes.json(),
      commentsRes.json()
    ]);

    // Return merged object
    return { posts, comments };
  } catch (err) {
    console.error("Fetch failed:", err);
    return { posts: [], comments: [] }; // fallback
  }
}

// Example usage
fetchPostsAndComments().then(data => console.log(data));
