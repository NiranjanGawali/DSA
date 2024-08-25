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
  if (strs.length == 0) return 0; // if the length of array is zero then ruturn 0

  let minLength = Math.min(...strs.map((str) => str.length)); // Finding length of smallest string of array

  for (let i = 0; i < minLength; i++) {
    // Loop through the min length
    let char = strs[0][i]; // accessing characters of first word from the array
    for (let j = 1; j < strs.length; j++) {
      // loop through the number of words in the array
      if (strs[j][i] !== char) {
        // When there is mismatch happen, we are getting substring from zero to i (count till there was match found)
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0].substring(0, minLength); // If the mismatch condition ws not executed, then simply we are taking substring from zero to minlength (smallset word in the strs array)
}

let strs = ['flower', 'flow', 'flight'];
// let strs = ['dog', 'racecar', 'car'];

let result = findLongestCommonPrefix(strs);

console.log('Longest common prefix : ', result);

/*
Time Complexity: O(N * M) where N is the number of strings and M is the length of the longest string.
Space Complexity: O(1) for auxiliary space, excluding the space used by the input and the temporary array for string lengths.
 */
