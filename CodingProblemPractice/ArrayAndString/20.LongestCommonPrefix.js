/*

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

*/

function findLongestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let firstWordChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (firstWordChar !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return '';
  //   return strs[0].substring(0, minLength);
}

let strs = ['flower', 'flow', 'flight'];
// let strs = ['dog', 'racecar', 'car'];

let result = findLongestCommonPrefix(strs);

console.log('Result : ', result);

/*
Time Complexity: O(N * M) where N is the number of strings and M is the length of the shortest string.
Space Complexity: O(1) for auxiliary space, excluding the space used by the input and the temporary array for string lengths.
 */
