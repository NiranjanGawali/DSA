/*

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]
 
Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

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
  console.log(head);

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

function removeDuplicates(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = head;

  let seen = new Set();
  seen.add(current.value);

  while (current.next) {
    if (seen.has(current.next.value)) {
      current.next = current.next.next;
    } else {
      current = current.next;
      seen.add(current.value);
    }
  }

  return dummy.next;
}

let head = [1, 2, 3, 3, 4, 4, 5];

let linkedList = arrayToLinkedList(head);
let result = removeDuplicates(linkedList);
console.log('Result : ', linkedListToArray(result));

/*

Time Complexity: O(n), where n is the number of nodes in the linked list.
Space Complexity: O(n), due to the use of a Set to store seen node values.

*/
