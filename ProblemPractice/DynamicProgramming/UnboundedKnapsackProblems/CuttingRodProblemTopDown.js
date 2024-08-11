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

function findMaxObtainableValue(
  n,
  arrLengthVal,
  price,
  priceLength,
  memo = {}
) {
  if (n === 0 || priceLength === 0) {
    return 0;
  }

  let key = `${n}:${priceLength}`;

  if (key in memo) {
    return memo[key];
  }

  if (arrLengthVal[n - 1] > priceLength) {
    memo[key] = findMaxObtainableValue(
      n - 1,
      arrLengthVal,
      price,
      priceLength,
      memo
    );
  } else {
    let includeItem =
      price[n - 1] +
      findMaxObtainableValue(
        n,
        arrLengthVal,
        price,
        priceLength - arrLengthVal[n - 1],
        memo
      );

    let excludeItem = findMaxObtainableValue(
      n - 1,
      arrLengthVal,
      price,
      priceLength,
      memo
    );

    memo[key] = Math.max(includeItem, excludeItem);
  }

  return memo[key];
}

function main(price, n) {
  let arrLengthVal = Array(n)
    .fill()
    .map((_, i) => i + 1);

  return findMaxObtainableValue(n, arrLengthVal, price, price.length);
}

// Weight that we consider in 1-0 knapsack now we are going to consider it as price.length

let priceArr = [1, 5, 8, 9, 10, 17, 17, 20];
// let priceArr = [3, 5, 8, 9, 10, 17, 17, 20];
let n = priceArr.length;

let results = main(priceArr, n);

console.log('RESULTS : ', results);
