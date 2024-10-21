/*

Given a string S, find the length of the longest substring with all distinct characters. 

Example 1:
Input:
S = "geeksforgeeks"
Output: 7
Explanation: "eksforg" is the longest 
substring with all distinct characters.

Example 2:
Input: 
S = "aaa"
Output: 1
Explanation: "a" is the longest substring 
with all distinct characters.

Your Task:
You don't need to read input or print anything. Your task is to complete the function longestSubstrDitinctChars() which takes the string S as input and returns the length of the longest substring with all distinct characters.

Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(K), where K is Constant.

Constraints:
1<=|S|<=105

https://www.geeksforgeeks.org/problems/longest-distinct-characters-in-string5848/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card

*/

function longestSubstringWithAllDistinctCharacters(str) {
  let start = 0;
  let end = 0;

  let strMap = {};

  let longestSubstr = -1;

  while (end < str.length) {
    let endChar = str[end];
    strMap[endChar] = (strMap[endChar] || 0) + 1;

    while (strMap[endChar] > 1) {
      let startChar = str[start];
      if (startChar in strMap) {
        strMap[startChar]--;
        if (strMap[startChar] === 0) {
          delete strMap[startChar];
        }
      }
      start++;
    }

    if (Object.keys(strMap).length === end - start + 1) {
      longestSubstr = Math.max(longestSubstr, end - start + 1);
    }

    end++;
  }

  return longestSubstr;
}

let S = 'geeksforgeeks';

let result = longestSubstringWithAllDistinctCharacters(S);

console.log('Longest substring with all distinct chars : ', result);

/*

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(k), where k is the number of unique characters in the string (in the worst case, O(n)).

*/
