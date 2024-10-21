function findSubarrayCountLessThanK(nums, k) {
  let start = 0;
  let end = 0;
  let n = nums.length;
  let product = 1;
  let count = 0;
  while (end < n) {
    product *= nums[end];

    if (product >= k) {
      product /= nums[start];
      start++;
    }

    count += end - start + 1;

    end++;
  }

  return count;
}

let nums = [10, 5, 2, 6],
  k = 100;

let result = findSubarrayCountLessThanK(nums, k);
console.log('Result : ', result);
