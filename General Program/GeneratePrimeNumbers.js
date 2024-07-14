/**
 * Generarte prime numbers below given number
 */

/*
METHOD 1
*/

/*

function generatePrimeNumbers(num) {
  let results = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      let ans = i % j;
      if (ans === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) results.push(i);
  }
  return results;
}

let result = generatePrimeNumbers(10);
console.log('Result : ', result);

*/

/*
 * Method 2
 */

/*
function generatePrimeNumbers(num) {
  let results = [];
  for (let i = 0; i < num; i++) {
    let primeResult = isPrime(i);
    if (primeResult) {
      results.push(i);
    }
  }
  return results;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let result = generatePrimeNumbers(10);
console.log('Result : ', result);
*/

/*
 * Method 3
 */
// This is most performance efficient method.

function generatePrimeNumbers(num) {
  let results = [];
  for (let i = 2; i < num; i++) {
    let primeResult = isPrime(i);
    if (primeResult) {
      results.push(i);
    }
  }
  return results;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let result = generatePrimeNumbers(10);
console.log('Result : ', result);

/**
 * Time complexity without Math.sqrt => 0(n * n) => 0(n^2)
 * Time complexity without Math.sqrt => 0(n * squareRoot of n) => 0(n^1.5)
 */
