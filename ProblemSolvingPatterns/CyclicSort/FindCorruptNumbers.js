/**
  We are given an unsorted array containing n numbers taken from the range 1 to n. The array originally contained all 
  the numbers from 1 to n, but due to a data error, one of the numbers got duplicated which also resulted in one number 
  going missing. Find both these numbers.
  */

function findCorruptNumbers(nums) {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      //swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  console.log('NUMS ', nums);

  //output => duplicate number(nums[i]) and the missing number(i+1)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
  return [-1, -1];
}

// let result = findCorruptNumbers([3, 1, 2, 5, 2]); //[2, 4], '2' is duplicated and '4' is missing.
let result = findCorruptNumbers([3, 1, 2, 3, 6, 4]); // [3, 5], '3' is duplicated and '5' is missing.

console.log('Result : ', result);
