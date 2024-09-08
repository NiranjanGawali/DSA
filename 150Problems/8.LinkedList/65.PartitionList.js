/*

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]
 
Constraints:
The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200


https://leetcode.com/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150

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

function partitionList(head, x) {
  let less_head = new ListNode(0);
  let less = less_head;

  let greater_head = new ListNode(0);
  let greater = greater_head;

  let current = head;

  while (current) {
    if (current.value < x) {
      less.next = current;
      less = less.next;
    } else {
      greater.next = current;
      greater = greater.next;
    }
    current = current.next;
  }

  // Terminate the greater list
  greater.next = null;

  // Combine the two lists
  less.next = greater_head.next;

  // Return the new head of the partitioned list
  return less_head.next;
}

let head = [1, 4, 3, 2, 5, 2],
  x = 3;

// let head = [2, 1],
//   x = 2;

let linkedList = arrayToLinkedList(head);
let result = partitionList(linkedList, x);
console.log('Result : ', linkedListToArray(result));

/*

Time Complexity: O(n)
Space Complexity: O(1)

*/
