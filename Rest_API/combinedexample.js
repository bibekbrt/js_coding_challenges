async function fetchPaginatedPosts() {
  try {
    // Fetch both pages in parallel
    const [page1Res, page2Res] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?_page=1"),
      fetch("https://jsonplaceholder.typicode.com/posts?_page=2")
    ]);

    if (!page1Res.ok) throw new Error(`Page 1 fetch failed: ${page1Res.status}`);
    if (!page2Res.ok) throw new Error(`Page 2 fetch failed: ${page2Res.status}`);

    // Parse JSON in parallel
    const [page1Posts, page2Posts] = await Promise.all([
      page1Res.json(),
      page2Res.json()
    ]);

    // Combine into one array
    const allPosts = [...page1Posts, ...page2Posts];

    return allPosts;
  } catch (err) {
    console.error("Failed to fetch paginated posts:", err);
    return [];
  }
}

// Example usage
fetchPaginatedPosts().then(posts => {
  console.log("Combined posts:", posts);
  console.log("Total posts:", posts.length);
});
