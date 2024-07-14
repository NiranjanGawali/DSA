// Longest substring with all unique elements

function findLongestSubstringWithAllUniqueElements(inputString) {
  let maxSubStringLength = 0;
  let end = 0;
  let start = 0;
  let elementMap = {};

  while (end < inputString.length) {
    let endChar = inputString.charAt(end);
    elementMap[endChar] = (elementMap[endChar] || 0) + 1;

    while (Object.keys(elementMap).length < end - start + 1) {
      let startChar = inputString.charAt(start);
      if (startChar in elementMap) {
        elementMap[startChar] -= 1;
        if (elementMap[startChar] === 0) {
          delete elementMap[startChar];
        }
      }
      start++;
    }

    if (Object.keys(elementMap).length === end - start + 1) {
      maxSubStringLength = Math.max(maxSubStringLength, end - start + 1);
    }

    end++;
  }
  return maxSubStringLength;
}

let input = 'pwwkew';
let result = findLongestSubstringWithAllUniqueElements(input);
console.log('Result : ', result); // cbebebe
