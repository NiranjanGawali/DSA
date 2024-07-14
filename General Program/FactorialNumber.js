/*
With Recursion
*/

function factorial(n) {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
}

console.log('Factorial of number : ', factorial(5));
