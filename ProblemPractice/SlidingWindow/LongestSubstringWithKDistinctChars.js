// Given a string, find the length of the longest substring in it with at most two distinct characters.

function lengthOfLongestSubstringTwoDistinct(str, k) {
  let longestSubstringLength = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let map = {};

  while (end < str.length) {
    let endChar = str.charAt(end);
    map[endChar] = (map[endChar] || 0) + 1;

    while (Object.keys(map).length > k) {
      let startChar = str.charAt(start);
      map[startChar] -= 1;
      if (map[startChar] === 0) {
        delete map[startChar];
      }
      start++;
    }

    if (Object.keys(map).length == k) {
      longestSubstringLength = Math.max(
        longestSubstringLength,
        end - start + 1
      );
    }

    end++;
  }
  return longestSubstringLength;
}

let result = lengthOfLongestSubstringTwoDistinct('eceba', 2); //3
// let result = lengthOfLongestSubstringTwoDistinct('ccaabbb'); //5

console.log('Result : ', result);
