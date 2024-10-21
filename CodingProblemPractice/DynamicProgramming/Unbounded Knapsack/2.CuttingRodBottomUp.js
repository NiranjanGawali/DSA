/*

Given a rod of length n inches and an array of prices that includes prices of all pieces of size smaller than n. Determine the maximum value obtainable by cutting up the rod and selling the pieces. For example, 
if the length of the rod is 8 and the values of different pieces are given as the following, then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6) 

length   | 1   2   3   4   5   6   7   8  
--------------------------------------------
price    | 1   5   8   9  10  17  17  20




And if the prices are as follows, then the maximum obtainable value is 24 (by cutting in eight pieces of length 1) 

length   | 1   2   3   4   5   6   7   8  
--------------------------------------------
price    | 3   5   8   9  10  17  17  20


https://www.geeksforgeeks.org/cutting-a-rod-dp-13/

*/

function findMaxObtainableValue(n, priceArr, lengthArr, remainingLength) {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(remainingLength + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= remainingLength; j++) {
      if (lengthArr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = priceArr[i - 1] + dp[i][j - lengthArr[i - 1]];
        dp[i][j] = Math.max(excludeItem, includeItem);
      }
    }
  }

  return dp[n][remainingLength];
}

function main(n, priceArr) {
  let lengthArr = new Array(n).fill().map((_, i) => i + 1);
  return findMaxObtainableValue(n, priceArr, lengthArr, n);
}

let priceArr = [1, 5, 8, 9, 10, 17, 17, 20];
// let priceArr = [3, 5, 8, 9, 10, 17, 17, 20];
let n = priceArr.length;

let results = main(n, priceArr);

console.log('RESULTS : ', results);
