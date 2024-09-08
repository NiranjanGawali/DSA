/*

Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

https://leetcode.com/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150

*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}

function rotateList(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  // Step 1: Find the length of the linked list
  let tail = head;
  let length = 1;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Adjust k if it's larger than the length of the list
  k = k % length;
  if (k === 0) return head;

  // Step 3: Find the new head (length - k) and new tail (length - k - 1)
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;

  // Step 4: Rotate the list
  newTail.next = null;
  tail.next = head;

  return newHead;
}

let head = [1, 2, 3, 4, 5],
  k = 2;

// let head = [0, 1, 2],
//   k = 4;

let linkedList = arrayToLinkedList(head);

let result = rotateList(linkedList, k);
console.log('Result : ', linkedListToArray(result));

/*

Time Complexity: O(n)
Space Complexity: O(1)

*/
