function addAshcyn(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // 1 second delay
  });
}

addAshcyn(3, 4).then(sum => {
  console.log(sum); // 7 (after 1 second)
})
