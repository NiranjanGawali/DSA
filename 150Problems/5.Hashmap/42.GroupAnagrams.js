/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.


https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Method 1: Using map
/*
function groupAnagrams(strs) {
  let map = {};

  for (const str of strs) {
    let temp = str.split('').sort().join(''); // sort a string of array
    if (!map[temp]) map[temp] = [];
    map[temp].push(temp);
  }

  return Object.values(map);
}
*/

// Method 2: Using character frequency

function groupAnagrams(strs) {
  let map = {};

  let aChar = 'a'.charCodeAt(0);

  for (const str of strs) {
    let freq = Array(26).fill(0);

    for (const char of str) {
      freq[char.charCodeAt(0) - aChar]++;
    }

    let key = freq.join(''); // Join with a delimiter to avoid collisions
    /*
        we can also use delimeter to create key 
        let key = freq.join('#');
    */
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }

  return Object.values(map);
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// let strs = [''];
// let strs = ['a'];

let result = groupAnagrams(strs);

console.log('Result : ', result); // Expected result: [ [ 'aet', 'aet', 'aet' ], [ 'ant', 'ant' ], [ 'abt' ] ]

// For method 1
/*

Time and Space Complexity:

Time Complexity: O(N * K log K)
N is the number of strings.
K is the maximum length of a string.
Sorting each string takes O(K log K), and we do this for each of the N strings.

Space Complexity: O(N * K)
Storing each string in the hash map, where N is the number of strings, and K is the maximum length of a string.

*/

// For method 2

/*

Time and Space Complexity:

Time Complexity: O(N * K)
N is the number of strings.
K is the maximum length of a string.

Space Complexity: O(N * K)
Storing each string in the hash map, where N is the number of strings, and K is the maximum length of a string.

*/
