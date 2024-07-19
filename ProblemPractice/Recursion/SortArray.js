// Sort the array using recursion.

// Insert function
function insert(arr, temp) {
  if (arr.length == 0 || arr[arr.length - 1] < temp) {
    arr.push(temp);
    return;
  }

  let val = arr.pop();
  insert(arr, temp);
  arr.push(val);
}

// Sort function
function sort(arr) {
  if (arr.length <= 1) {
    return;
  }
  let temp = arr.pop();
  sort(arr);
  insert(arr, temp);
}

let arr = [9, 0, 1, 4, 90, 67, 2, 120];
sort(arr);

console.log(arr);
