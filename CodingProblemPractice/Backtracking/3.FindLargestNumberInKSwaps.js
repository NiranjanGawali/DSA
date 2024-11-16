/*

Given a number K and string str of digits denoting a positive integer, build the largest number possible by performing swap operations on the digits of str at most K times.

Example 1:
Input:
K = 4
str = "1234567"
Output:
7654321

Explanation:
Three swaps can make the
input 1234567 to 7654321, swapping 1
with 7, 2 with 6 and finally 3 with 5

*/

function findLargestNumber(numArr, k, startIndex, result) {
  if (k == 0 || startIndex == numArr.length - 1) {
    let temp = parseInt(numArr.join(''));
    if (temp > result.largestNum) result.largestNum = temp;
    return;
  }

  let maxNumber = Math.max(...numArr.slice(startIndex + 1));

  for (let i = startIndex + 1; i < numArr.length; i++) {
    if (numArr[i] > numArr[startIndex] && numArr[i] == maxNumber) {
      [numArr[i], numArr[startIndex]] = [numArr[startIndex], numArr[i]];
      findLargestNumber(numArr, k - 1, startIndex + 1, result);
      [numArr[i], numArr[startIndex]] = [numArr[startIndex], numArr[i]];
    }
  }

  findLargestNumber(numArr, k, startIndex + 1, result);
}

function main(str, k) {
  let inputArr = str.split('');
  let result = { largestNum: 0 };
  let start = 0;

  findLargestNumber(inputArr, k, start, result);

  return result.largestNum;
}

let k = 4;
let str = '1234567';
// Result: 7654321

let result = main(str, k);

console.log('Result : ', result);

/*
Time Complexity:  𝑂(n x 𝑛!)
Space Complexity:  𝑂(𝑛)
*/
