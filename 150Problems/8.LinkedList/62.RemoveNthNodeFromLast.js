/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 
Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 
Follow up: Could you do this in one pass?

https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150

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

function removeTheNode(head, n) {
  // Create a dummy node to handle edge cases like removing the head node
  let dummy = new ListNode(0);
  dummy.next = head;
  let firstNode = head;
  let secondNode = head;

  // Move the first pointer `n + 1` steps ahead, here running it n+1 steps so in the next step when we run the both pointer till end, second node will be n+1 back from first node i.e end of linked list
  for (let i = 0; i < n + 1; i++) {
    if (firstNode === null) return null;
    firstNode = firstNode.next;
  }
  //   console.log('firstNode : ', JSON.stringify(firstNode));

  // Move both pointers until the first pointer reaches the end
  while (firstNode != null) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  //   console.log(firstNode);
  //   console.log(secondNode);

  // Remove the nth node from the end
  secondNode.next = secondNode.next.next;

  return dummy.next;
}

// let head = [1, 2, 3, 4, 5],
//   n = 2;

// let head = [1],
//   n = 1;

let head = [1, 2],
  n = 1;

let linkedList = arrayToLinkedList(head);
let result = removeTheNode(linkedList, n);
console.log('Result : ', linkedListToArray(result));

/*

Time Complexity: O(n)
Space Complexity: O(1)

*/
