function findFactorial(n) {
  if (n === 1) return 1;
  return n * findFactorial(n - 1);
}

let value = 4;
let fact = findFactorial(value);

console.log(`The factorial of ${value} is : ${fact}`);
