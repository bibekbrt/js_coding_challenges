function setCookie() {
  const now = new Date();
  now.setTime(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours in ms
  const expires = "expires=" + now.toUTCString();

  document.cookie = `token=abc123; ${expires}; path=/`;

  console.log("Cookie set:", document.cookie);
}

// Optional: attach to button click
document.getElementById("setCookieBtn").addEventListener("click", setCookie);