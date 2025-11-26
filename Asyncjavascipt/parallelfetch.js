function fetchCombined() {
  const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
  ];

  return Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(([users, posts]) => {
      return [...users, ...posts]; // combine into one array
    });
}
// fetchCombined().then(data => {
//   console.log(data); // combined users + posts array
// });



function fetchCombinedanother() {
  return Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
  ]).then(([u, p]) => [...u, ...p]);
}
fetchCombinedanother().then(data => {
  console.log(data); // combined users + posts array
});


function fetchCombinedsecondway() {
  return Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
  ]).then(([users, posts]) => users.concat(posts));
}