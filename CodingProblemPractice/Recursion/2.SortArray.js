// Sort the array using recursion.

function insertNumber(arr, temp) {
  if (arr.length === 0) {
    arr.push(temp);
    return;
  }

  let val = arr.pop();
  insertNumber(arr, temp);
  arr.push(val);
}

function sort(arr) {
  if (arr.length <= 1) {
    return;
  }

  let temp = arr.pop();
  sort(arr);
  insertNumber(arr, temp);
}

let arr = [9, 0, 1, 4, 90, 67, 2, 120];
sort(arr);

console.log(arr);
