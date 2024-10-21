/*

Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.

Example 1:
Input:
txt = forxxorfxdofr
pat = for
Output: 3
Explanation: for, orf and ofr appears
in the txt, hence answer is 3.

Example 2:
Input:
txt = aabaabaa
pat = aaba
Output: 4
Explanation: aaba is present 4 times
in txt.

Your Task:
Complete the function search() which takes two strings pat, txt, as input parameters and returns an integer denoting the answer. 
You don't need to print answer or take inputs.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(26) or O(256)

Constraints:
1 <= |pat| <= |txt| <= 105
Both strings contain lowercase English letters.


https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1

*/

// Method 1: Brute force approach
/*
function findCountOfAnagrams(str, substr) {
  let substrLength = substr.length;
  let anagramCount = 0;

  for (let i = 0; i < str.length; i++) {
    let temp = str
      .slice(i, i + substrLength)
      .split('')
      .sort()
      .join('');

    if (temp === substr) {
      anagramCount++;
    }
  }

  return anagramCount;
}

let txt = 'forxxorfxdofr',
  pat = 'for';

let result = findCountOfAnagrams(txt, pat);
console.log('Count of anagram in the give string : ', result);

/*
Time Complexity: O(n * mlogm) - n is length of the str and m is length of substr
Space Complexity: O(m) - m is the length of substr
*/

// Method 2: Two pointer approach

function findCountOfAnagrams(str, substr) {
  let substrLength = substr.length;

  let start = 0;
  let end = 0;
  let anagramCount = 0;

  let substrMap = {};

  for (const char of substr) {
    substrMap[char] = (substrMap[char] || 0) + 1;
  }

  let count = Object.keys(substrMap).length;

  while (end < str.length) {
    let endChar = str[end];

    if (endChar in substrMap) {
      substrMap[endChar]--;
      if (substrMap[endChar] === 0) {
        count--;
      }
    }

    if (end - start + 1 === substrLength) {
      if (count === 0) {
        anagramCount++;
      }

      let startChar = str[start];
      if (startChar in substrMap) {
        if (substrMap[startChar] === 0) {
          count++;
        }
        substrMap[startChar]++;
      }

      start++;
    }

    end++;
  }

  return anagramCount;
}

// let txt = 'forxxorfxdofr',
//   pat = 'for';

let txt = 'aabaabaa',
  pat = 'aaba';

let result = findCountOfAnagrams(txt, pat);
console.log('Count of anagram in the give string : ', result);

/*

Time Complexity: O(n) - n is length of the str
Space Complexity: O(m) - m is the distinct characters in the substr

*/
