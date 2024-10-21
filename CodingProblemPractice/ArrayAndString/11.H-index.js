/*

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,3,1]
Output: 1
 

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000


https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

*/

/*

function getHIndex(citations) {
  let H_INDEX = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    let citation = citations[i];
    if (citation >= i + 1) {
      H_INDEX = i + 1;
    }
  }

  return H_INDEX;
}


let citations = [3, 0, 6, 1, 5];

let result = getHIndex(citations);

console.log('The H index for citations : ', result);

/*
Time complexity : O(n log n)
Space complexity : O( log n) - space consumed in the internal space for sorting
*/

function getHIndex(citations) {
  let n = citations.length;
  let bucket = new Array(n + 1).fill(0); // The extra bucket ensures that you account for papers with very high citations and calculate the h-index accurately, even when some citations exceed the number of papers.

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= n) {
      bucket[n]++;
    } else {
      bucket[citations[i]]++;
    }
  }

  let total = 0;
  for (let i = n; i >= 0; i--) {
    total += bucket[i];
    if (total >= i) {
      return i;
    }
  }

  console.log(bucket);
}

let citations = [3, 0, 6, 1, 5];

let result = getHIndex(citations);

console.log('The H index for citations : ', result);

/*
Time complexity : O(n)
Space complexity : O(n)
*/
