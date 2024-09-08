/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

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

function AddTwoNumbers(ll1, ll2) {
  let dummyLinkedList = new ListNode();
  let current = dummyLinkedList;
  let carry = 0;

  while (ll1 || ll2 || carry > 0) {
    let sum = carry;

    if (ll1) {
      sum += ll1.value;
      ll1 = ll1.next;
    }

    if (ll2) {
      sum += ll2.value;
      ll2 = ll2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyLinkedList.next;
}

// let l1 = [2, 4, 3],
//   l2 = [5, 6, 4];

// let l1 = [0],
//   l2 = [0];

let l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];

let linkedListOne = arrayToLinkedList(l1);
let linkedListTwo = arrayToLinkedList(l2);

let result = AddTwoNumbers(linkedListOne, linkedListTwo);
let resultArrFormat = linkedListToArray(result);
console.log('Result : ', resultArrFormat);

/*

arrayToLinkedList(nums)
Time Complexity: O(n)
Space Complexity: O(n)


linkedListToArray(linkedList)
Time Complexity: O(m)
Space Complexity: O(m)


AddTwoNumbers(ll1, ll2)
Time Complexity: O(max(n, m))
Space Complexity: O(max(n, m))

In this case, n and m refer to the lengths 

*/
