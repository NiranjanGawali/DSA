/*
Without Recursion, This falls under bottom-up problem solving approach with tabulation
*/
/*
function fibonacci(n) {
  let results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 2] + results[i - 1]);
  }
  return results;
}

// console.log('Fibonacci Series : ', fibonacci(5));
*/

/*
With Recursion
*/

/*
function getFibonacciSeries(n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    let fibNum = fibonacciRec(i);
    results.push(fibNum);
  }
  return results;
}

function fibonacciRec(n) {
  // Given n is the index
  if (n <= 1) return n;
  return fibonacciRec(n - 2) + fibonacciRec(n - 1);
}

console.log('Fibonacci Series : ', getFibonacciSeries(5));
*/

/*
With Recursion and memoization - Top down approach of dynamic programming
*/
/*

function calculateFibonacci(num) {
  let results = [];
  let memoize = [];

  for (let i = 0; i < num; i++) {
    let fibResult = fib(memoize, i);
    results.push(fibResult);
  }
  return results;
}

function fib(memoize, num) {
  if (num < 2) return num;
  if (memoize[num]) return memoize[num];
  memoize[num] = fib(memoize, num - 2) + fib(memoize, num - 1);
  return memoize[num];
}

const result = calculateFibonacci(5);
console.log('Result : ', result);

*/

/*
Fibonacci using Sieve of Eratosthenes, most efficient method to find the fibonacci series with time complexity 0(nloglogn) and space complexity of (n)
*/

function fibonacci(n) {
  let resultArr = Array(n + 1).fill(true);
  let primeResult = [];
  for (let i = 2; i <= n; i++) {
    if (resultArr[i] === true) {
      for (let j = i * i; j <= n; j += i) {
        resultArr[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (resultArr[i] === true) {
      primeResult.push(i);
    }
  }
  return primeResult;
}

console.log('Fibonacci Series : ', fibonacci(5));
