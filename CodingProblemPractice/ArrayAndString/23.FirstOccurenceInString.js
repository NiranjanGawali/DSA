/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

function findFirstOccurenceInString(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;

  let start = 0,
    end = 0;

  while (end < m) {
    if (end - start + 1 === n) {
      let temp = haystack.substring(start, end + 1);
      if (temp === needle) {
        return start;
      }
      start++;
    }
    end++;
  }

  return -1;
}

let haystack = 'asadbutsad',
  needle = 'sad';

// let haystack = "leetcode", needle = "leeto"

let result = findFirstOccurenceInString(haystack, needle);
console.log('Occurence of needle in haystack index : ', result);

/*

Time Complexity: O(m * n), where m is the length of haystack and n is the length of needle.
Space Complexity: O(n), where n is the length of needle.

*/
