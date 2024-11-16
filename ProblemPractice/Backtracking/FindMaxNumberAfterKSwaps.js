/*
Given a number K and string str of digits denoting a positive integer, build the largest number possible by performing swap operations on the digits 
of str at most K times.


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

function findLargestNumber(inputArr, k, start, result) {
  if (k == 0 || start == inputArr.length - 1) {
    let temp = parseInt(inputArr.join(''));
    if (temp > result.value) result.value = temp;
    return;
  }

  let partArray = inputArr.slice(start + 1);
  let maxElement = Math.max(...partArray);

  for (let i = start + 1; i < inputArr.length; i++) {
    if (inputArr[start] < inputArr[i] && maxElement == inputArr[i]) {
      [inputArr[start], inputArr[i]] = [inputArr[i], inputArr[start]];
      findLargestNumber(inputArr, k - 1, start + 1, result);
      [inputArr[start], inputArr[i]] = [inputArr[i], inputArr[start]];
    }
  }

  findLargestNumber(inputArr, k, start + 1, result); // Call next element without increasing the swaps
}

function main(inputString, k) {
  let inputArr = inputString.split('');
  let result = { value: 0 };
  let start = 0;

  findLargestNumber(inputArr, k, start, result);

  return result.value;
}

let input = '1234567';
let k = 2;

let finalOutput = main(input, k);
console.log('Final Output : ', finalOutput); // Result : 987321

// Time complexity of the code - 0( n2 * n!/(n-k)! )
