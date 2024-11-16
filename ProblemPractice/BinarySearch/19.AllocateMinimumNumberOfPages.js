/*

Given that there are N books and M students. Also given are the number of pages in each book in ascending order. The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum, 
with the condition that every student is assigned to read some consecutive books. Print that minimum number of pages.

Examples: 
Input: N = 4, pages[] = {12, 34, 67, 90}, M = 2
Output: 113
Explanation: There are 2 students. Books can be distributed in following combinations:
{12} and {34, 67, 90} -> Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
{12, 34} and {67, 90} -> Max number of pages is allocated to student 2 with 67 + 90 = 157 
{12, 34, 67} and {90} -> Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages
The third combination has the minimum pages assigned to a student = 113.


Input: N = 3, pages[] = {15, 17, 20}, M = 2
Output: 32
Explanation: There are 2 students. Books can be distributed in following combinations:
{15} and {17, 20} -> Max number of pages is allocated to student 2 with 17 + 20 = 37 pages
{15, 17} and {20} -> Max number of pages is allocated to student 1 with 15 + 17 = 32 pages
The second combination has the minimum pages assigned to a student = 32.

https://www.geeksforgeeks.org/allocate-minimum-number-pages/

*/

function isValid(arr, m, mid) {
  let student = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > mid) {
      student++;
      sum = arr[i];
    }

    if (student > m) {
      return false;
    }
  }

  return true;
}

function findMinNumberOfPages(n, pages, m) {
  if (m > n) {
    return -1; // It's not possible to allocate books to more students than available
  }

  let start = Math.max(...pages); // The minimum possible value for the max pages
  let end = pages.reduce((acc, num) => acc + num, 0); // The maximum possible value
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (isValid(pages, m, mid)) {
      result = mid; // Mid is a valid solution, try for a smaller maximum
      end = mid - 1;
    } else {
      start = mid + 1; // Mid is not valid, try for a larger maximum
    }
  }

  return result;
}

// let n = 4,
//   pages = [12, 34, 67, 90],
//   m = 2;

let n = 3,
  pages = [15, 17, 20],
  m = 2;

let result = findMinNumberOfPages(n, pages, m);

console.log('Result : ', result); // Expected output: 113

/*
Time Complexity: O(n * log(sum - max)), 
where n is the number of books, 
sum is the total sum of pages, 
and max is the maximum pages in a single book.

Space Complexity: O(1) (constant space usage)
*/
