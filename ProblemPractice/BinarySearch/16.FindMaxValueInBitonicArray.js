/*

Given a bitonic array find the maximum value of the array. An array is said to be bitonic if it has an increasing sequence of integers followed immediately by a decreasing sequence of integers.

Example
Input: [1 ,4 ,8 ,3 ,2]

Output:
8

https://www.includehelp.com/icp/maximum-value-in-a-bitonic-array.aspx

*/

function findMaxValue(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid === 0) {
      if (arr[0] > arr[1]) return 0;
      else return 1;
    }

    if (mid == arr.length - 1) {
      if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;
      else return arr.length - 2;
    }

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid - 1] > arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

let arr = [1, 4, 8, 3, 2];

let result = findMaxValue(arr);
console.log('Result : ', result);

/*

Time Complexity: O(log n)
Space Complexity: O(1)

*/
