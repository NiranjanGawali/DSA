/*

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-interview-150

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

function mergeSortedList(ll1, ll2) {
  let dummyLinkedList = new ListNode();
  let current = dummyLinkedList;

  while (ll1 && ll2) {
    if (ll1.value < ll2.value) {
      current.next = ll1;
      ll1 = ll1.next;
    } else {
      current.next = ll2;
      ll2 = ll2.next;
    }
    current = current.next;
  }

  if (ll1) {
    current.next = ll1;
  }

  if (ll2) {
    current.next = ll2;
  }

  return dummyLinkedList.next;
}

let list1 = [1, 2, 4, 5],
  list2 = [1, 3, 4];

let linkedList1 = arrayToLinkedList(list1);
let linkedList2 = arrayToLinkedList(list2);

let result = mergeSortedList(linkedList1, linkedList2);
console.log(linkedListToArray(result));

/*

arrayToLinkedList(nums)
Time Complexity: O(n)
Space Complexity: O(n)

linkedListToArray(linkedList)
Time Complexity: O(m)
Space Complexity: O(m)

mergeSortedList(ll1, ll2)
Time Complexity: O(n + m)
Space Complexity: O(n + m) // Space for the merged linked list itself

// In this case, n and m refer to the lengths of the linked lists ll1 and ll2 respectively.


*/
