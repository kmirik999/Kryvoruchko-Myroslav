const sum = (...args) => {
    let totalSum = 0;
    for (const numbers of args) {
        totalSum += numbers;
      }
    return totalSum
  };
  console.log(sum(299, 1, 10, 90))
  