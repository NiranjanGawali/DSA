function findFactorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * findFactorial(n - 1);
}

let result = findFactorial(5);
console.log('Result : ', result);
