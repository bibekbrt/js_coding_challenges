function log1to5() {
  let current = 1;

  const intervalId = setInterval(() => {
    console.log(current);

    if (current === 5) {
      clearInterval(intervalId);
    }

    current++;
  }, 1000);
}

log1to5();
