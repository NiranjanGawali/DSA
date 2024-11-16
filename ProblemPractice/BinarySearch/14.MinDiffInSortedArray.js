/*

Given a sorted array, find the element in the array which has minimum difference with the given number. 

example 1
input - arr = [1,3,8,10,12,15], key = 12
expeted answer = 12 , as 12-12 = 0

example 2
input - arr = [1,3,8,10,15], key = 12
expected answer = 10, as 10-12 = 2

*/

function findMinDiffElement(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return arr[mid];
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  let startMinDiff = Math.abs(arr[start] - key);
  let endMinDiff = Math.abs(arr[end] - key);

  return startMinDiff < endMinDiff ? arr[start] : arr[end];
}

// let arr = [1, 3, 8, 10, 15],
//   key = 12;

let arr = [1, 3, 8, 10, 12, 15],
  key = 12;

let result = findMinDiffElement(arr, key);
console.log('Result : ', result);

/*

When we run the binary search algoritham, if the key element is not present in the array then high and low will always points to numbers two neighbours 
for exmple if we have an array [1, 3, 8, 10, 15] and out key is 12, then after binary search algo executed, our high will point to 10 and low will point to 15
afterwards we can simply take min difference.



Time Complexity: O(log n)
Space Complexity: O(1)

*/
