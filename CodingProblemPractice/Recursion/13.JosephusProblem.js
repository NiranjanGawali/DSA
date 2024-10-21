/*

There are n people standing in a circle (numbered clockwise 1 to n) waiting to be executed. The counting begins at point 1 in the circle and proceeds around 
the circle in a fixed direction (clockwise). In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds 
around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.

Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. The task is to choose 
the place in the initial circle so that you are the last one remaining and so survive.

Example 1:
Input:
n = 2, k = 1
Output:
2
Explanation:
Here, n = 2 and k = 1, then safe position is
2 as the person at 1st position will be killed.

Example 2:
Input:
n = 4, k = 2
Output:
1
Explanation:
The safe position is 1.

*/

function findPersonWhoLive(arr, k, index, result) {
  if (arr.length === 1) {
    result.push(arr[0]);
    return;
  }

  index = (index + k) % arr.length; // If reached at the end of array index so to bring it further this logic is used.

  arr.splice(index, 1);

  findPersonWhoLive(arr, k, index, result);
}

function main(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let result = [];
  let index = 0;
  findPersonWhoLive(arr, k, index, result);
  return result;
}

let n = 4,
  k = 2;

let result = main(n, k);

console.log(`The person who live : `, result[0]);

/*
  Time Complexity: O(n^2)
  - There are n recursive calls.
  - Each call performs a splice operation which takes O(n) time.

  Space Complexity: O(n)
  - Array `arr` uses O(n) space.
  - Recursion depth is O(n), adding to the space complexity.
*/
