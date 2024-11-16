function removeDuplicateElements(nums) {
  if (nums.length === 0) {
    return [];
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  let output = nums.slice(0, i + 1);
  //   console.log('Output : ', output);
  return output;
}

let nums = [1, 1, 2];

let result = removeDuplicateElements(nums);
console.log('Result : ', result);
