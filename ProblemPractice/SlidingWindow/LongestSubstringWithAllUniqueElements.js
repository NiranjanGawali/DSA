// Longest substring with all unique elements

function findLongestSubstringWithAllUniqueElements(inputString) {
  let maxSubStringLength = 0;
  let end = 0;
  let start = 0;
  let elementMap = {};

  while (end < inputString.length) {
    let endChar = inputString.charAt(end);
    elementMap[endChar] = (elementMap[endChar] || 0) + 1;

    // If any character appears more than once, shrink the window from the left.
    while (elementMap[endChar] > 1) {
      let startChar = inputString.charAt(start);
      elementMap[startChar]--;
      if (elementMap[startChar] === 0) {
        delete elementMap[startChar];
      }
      start++;
    }

    // Update the maximum length of the substring with all unique characters.
    if (Object.keys(elementMap).length === end - start + 1) {
      maxSubStringLength = Math.max(maxSubStringLength, end - start + 1);
    }

    end++;
  }
  return maxSubStringLength;
}

let input = 'pwwkew';
let result = findLongestSubstringWithAllUniqueElements(input);
console.log('Result : ', result); // Expected output: 3 ('wke')
