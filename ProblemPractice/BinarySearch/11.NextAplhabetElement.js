/*
Given an array of letters sorted in ascending order, find the smallest letter in the the array which is greater than a given key letter.

let arr = [a,c,f,h], key = f
*/

function findNextAlphabet(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let nextAlphabet = '';

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      start = mid + 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
      nextAlphabet = arr[mid];
    }
  }

  return nextAlphabet;
}

// let arr = ['a', 'c', 'f', 'h'],
//   key = 'f';

let arr = ['a', 'c', 'f', 'h'],
  key = 'e';

let result = findNextAlphabet(arr, key);
console.log('Result : ', result);

/*
 * Time Complexity - O(logn)
 * Space Complexity - O(1)
 */
