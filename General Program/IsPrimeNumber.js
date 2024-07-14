/**
 * Check if the provided number is prime or not
 */

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let result = isPrime(2);
console.log('Result : ', result);
