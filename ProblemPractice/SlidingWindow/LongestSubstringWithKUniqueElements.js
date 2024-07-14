// Longest substring with K unique elements

function findLongestSubstringWithKUniqueElements(inputString, k) {
  if (k === 0) return 0; // Edge case where k is 0

  let maxSubStringLength = 0;
  let end = 0;
  let start = 0;
  let elementMap = {};
  let inputStringLength = inputString.length;

  while (end < inputStringLength) {
    // Dealing with end condition
    let endChar = inputString.charAt(end);
    elementMap[endChar] = (elementMap[endChar] || 0) + 1; // Adding elements into the map

    while (Object.keys(elementMap).length > k) {
      // Dealing with start condition
      let startChar = inputString.charAt(start);
      elementMap[startChar] -= 1;

      if (elementMap[startChar] == 0) {
        delete elementMap[startChar];
      }

      start++;
    }

    if (Object.keys(elementMap).length === k) {
      maxSubStringLength = Math.max(maxSubStringLength, end - start + 1);
    }

    end++;
  }
  return maxSubStringLength;
}

let input = 'aabacbebebe';
let k = 3;

let result = findLongestSubstringWithKUniqueElements(input, k);
console.log('Result : ', result); // cbebebe

//Time Complexity: O(n), where n is the length of the input string.
//Space Complexity: O(k), where k is the number of unique characters allowed in the substring.
