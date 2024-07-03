// Given a string, find the length of the longest substring in it with at most two distinct characters.

function lengthOfLongestSubstringTwoDistinct(str) {
  let outputString = '';
  let start = 0;
  let map = {};
  let maxLen = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str.charAt(end);
    map[char] = (map[char] || 0) + 1;

    while (Object.keys(map).length > 2) {
      let leftChar = str.charAt(start);
      map[leftChar]--;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
      start++;
    }

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      outputString = str.substring(start, end + 1);
    }
  }
  return maxLen;
}

let result = lengthOfLongestSubstringTwoDistinct('eceba'); //3
// let result = lengthOfLongestSubstringTwoDistinct('ccaabbb'); //5

console.log('Result : ', result);
