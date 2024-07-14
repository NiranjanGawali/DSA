/**
 * Count occurences of anagram in the given string for the given substring
 * Given a string and a substring, write a function to count how many times an anagram of the substring appears in the string.
 * Example:
 * Input:
 * inputString = 'forxxorfxdofr'
 * substring = 'for'
 * Output: The function should return 3
 */

// Below is the brute force approach

/*
function countOccurencesOfAnagram(inputString, substring) {
  let subStringLength = substring.length;
  let totalOccurences = 0;
  if (subStringLength > inputString.length) {
    return null;
  }
  let subStringSorted = substring.split('').sort().join('');

  for (let i = 0; i < inputString.length; i++) {
    let currentString = inputString
      .substring(i, i + subStringLength)
      .split('')
      .sort()
      .join('');

    if (subStringSorted === currentString) {
      totalOccurences++;
    }
  }
  return totalOccurences;
}

let input = 'forxxorfxdofr',
  substring = 'for';

let result = countOccurencesOfAnagram(input, substring);
console.log('Result : ', result);

/*
### Summary of Complexity

- **Time Complexity:** \(O(N \times M \log M)\)
  - Where \(N\) is the length of the input string, and \(M\) is the length of the substring.
  - The outer loop runs approximately \(N - M + 1\) times.
  - Each iteration involves extracting a substring (\(O(M)\)), sorting it (\(O(M \log M)\)), and comparing it (\(O(M)\)).

- **Space Complexity:** \(O(M)\)
  - Temporary storage for substrings of length \(M\).
  - The space used by frequency maps is constant (\(O(1)\)).
*/

// Below is solution using sliding window

function countOccurencesOfAnagram(inputString, substring) {
  let inputStringLength = inputString.length;
  let subStringLength = substring.length;

  if (subStringLength > inputStringLength) {
    return null;
  }

  let start = 0;
  let end = 0;
  let finalResult = 0;

  let subStringMap = {};
  for (const char of substring) {
    subStringMap[char] = (subStringMap[char] || 0) + 1;
  }

  let count = Object.keys(subStringMap).length;

  while (end < inputStringLength) {
    let endChar = inputString.charAt(end);

    if (endChar in subStringMap) {
      subStringMap[endChar]--;
      if (subStringMap[endChar] === 0) {
        count--;
      }
    }

    if (end - start + 1 === subStringLength) {
      if (count === 0) {
        finalResult++;
      }

      let startChar = inputString.charAt(start);
      if (startChar in subStringMap) {
        if (subStringMap[startChar] === 0) {
          count++;
        }
        subStringMap[startChar]++;
      }
      start++;
    }
    end++;
  }

  return finalResult;
}

// Example usage
// let input = 'aaabaaba';
// let substring = 'aaba';
// output should be 4

let input = 'forxxorfxdofr',
  substring = 'for';
// output should be 3

console.log(countOccurencesOfAnagram(input, substring));

// Time complexity here is - 0(n)
