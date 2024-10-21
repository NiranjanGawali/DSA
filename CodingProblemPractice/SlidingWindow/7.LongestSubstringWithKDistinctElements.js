/*

Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible substring then print -1.

Example 1:
Input:
S = "aabacbebebe", K = 3
Output: 
7
Explanation: 
"cbebebe" is the longest substring with 3 distinct characters.

Example 2:
Input: 
S = "aaaa", K = 2
Output: -1
Explanation: 
There's no substring with 2 distinct characters.
Your Task:
You don't need to read input or print anything. Your task is to complete the function longestKSubstr() which takes the string S and an integer K as input and returns the length of the longest substring with exactly K distinct characters. If there is no substring with exactly K distinct characters then return -1.

Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(|S|).

Constraints:
1 ≤ |S| ≤ 105
1 ≤ K ≤ 26
All characters are lowercase latin characters.

https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
*/

function findLongestSubstringLengthForKDistinctCharacters(str, k) {
  let start = 0;
  let end = 0;
  let strLength = str.length;

  let strMap = {};
  let longestSubstirng = -1;

  while (end < strLength) {
    let endChar = str[end];
    strMap[endChar] = (strMap[endChar] || 0) + 1;

    while (Object.keys(strMap).length > k) {
      let startChar = str[start];
      if (startChar in strMap) {
        strMap[startChar]--;
        if (strMap[startChar] === 0) {
          delete strMap[startChar];
        }
      }
      start++;
    }

    if (Object.keys(strMap).length == k) {
      longestSubstirng = Math.max(longestSubstirng, end - start + 1);
    }

    end++;
  }

  return longestSubstirng;
}

let S = 'aabacbebebe',
  K = 3;

// let S = 'aaaa',
//   K = 2;

let result = findLongestSubstringLengthForKDistinctCharacters(S, K);
console.log(
  'Length of longest substring with K distinct characters : ',
  result
);

/*
- **Time Complexity**: (O(|S|)), where (|S|) is the length of the input string. The algorithm processes each character in the string once using the sliding window approach.
- **Space Complexity**: (O(K)), where (K) is the number of distinct characters. Since we are dealing with lowercase Latin characters (up to 26), the space complexity is effectively (O(1)) in practice.
*/
