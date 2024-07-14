/* 
Find Averages of Sub Arrays
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);
Expected Answer - [ 2.2, 2.8, 2.4, 3.6, 2.8 ]
*/

//Here Problem will be solved using sliding window pattern for brute force please check earlier implementation.

function findAverageOfSubArrays(inputArr, k) {
  let results = [];
  let end = 0;
  let start = 0;
  let tempSum = 0;

  while (end < inputArr.length) {
    tempSum += inputArr[end];
    if (end - start + 1 === k) {
      let avg = tempSum / k;
      results.push(avg);
      tempSum -= inputArr[start];
      start++;
    }
    end++;
  }
  return results;
}

let input = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let k = 5;
let result = findAverageOfSubArrays(input, k);
console.log('Result : ', result);
