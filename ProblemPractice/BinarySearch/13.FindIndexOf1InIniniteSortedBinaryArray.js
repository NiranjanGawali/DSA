/*

Given an infinite sorted array consisting 0s and 1s. The problem is to find the index of first ‘1’ in that array. As the array is infinite, therefore it is guaranteed that number ‘1’ will be present in the array.

Examples:

Input : arr[] = {0, 0, 1, 1, 1, 1} 
Output : 2

Input : arr[] = {1, 1, 1, 1,, 1, 1}
Output : 0

*/

function findFirstOne(start, end, arr, target) {
  let res = -1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

function findIndexPositions(arr) {
  let start = 0;
  let end = 1;

  while (end < arr.length && 1 > arr[end]) {
    start = end;
    end = Math.min(arr.length - 1, end * 2);
  }
  // console.log('Start: ', start);
  // console.log('End: ', end);
  return findFirstOne(start, end, arr, 1);
}

// let arr = [0, 0, 1, 1, 1, 1];
// let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
let arr = [1, 1, 1, 1, , 1, 1];

let result = findIndexPositions(arr);
console.log('Result : ', result);

/*

findFirstOne(start, end, arr, target)
Time Complexity: O(log n)
Space Complexity: O(1)

findIndexPositions(arr)
Time Complexity: O(log n)
Space Complexity: O(1)

Overall
Time Complexity: O(log n)
Space Complexity: O(1)


*/
