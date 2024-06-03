// Here we are focusing on the memoization implmentation
//  The complexity here without memoization is 0(2^n)
// After adding the memoization is 0(n)

let memo = [];
var counter = 0;
function fib(n) {
  counter++;
  if (memo[n] !== undefined) return memo[n];
  if (n == 0 || n == 1) {
    return n;
  }
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}

let input = 7;
let result = fib(input);
console.log(
  `Febonaci number of ${input} : `,
  result,
  ' And counter is :',
  counter
);
