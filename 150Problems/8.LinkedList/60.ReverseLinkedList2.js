/*

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 
Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

https://leetcode.com/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrayToLinkedList(nums) {
  if (nums.length === 0) return null;

  let head = new ListNode(nums[0]);
  let current = head;
  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(linkedList) {
  let arr = [];
  let current = linkedList;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}

function reverseBetween(head, left, right) {
  if (!head || left === right) {
    return head;
  }

  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head;
  let prevLeft = dummy;

  // Move prevLeft to the node before the start of reversal
  for (let i = 0; i < left - 1; i++) {
    prevLeft = prevLeft.next;
  }

  let reverse = null;
  let current = prevLeft.next;

  // Initialize pointers for the reversal
  for (let i = left; i <= right; i++) {
    let nextNode = current.next;
    current.next = reverse;
    reverse = current;
    current = nextNode;
  }

  // Reconnect reversed sublist with the remaining list
  prevLeft.next.next = current;
  prevLeft.next = reverse;

  return dummy.next;
}

let head = [1, 2, 3, 4, 5],
  left = 2,
  right = 4;

const LLHead = arrayToLinkedList(head);
const m = left;
const n = right;
const result = reverseBetween(LLHead, m, n);
console.log(linkedListToArray(result)); // Output: 1 -> 4 -> 3 -> 2 -> 5

/*

Time Complexity: O(n)
Space Complexity: O(1)

*/
