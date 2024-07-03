/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function isPalindromicLinkedList(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // Middle point of slow is pointed
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the string from the middle point (slow) of linked list
  let prev = null;
  while (slow !== null) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Now lets compare first part and now reversed part of linked list
  let left = head; // points to the first 1
  let right = prev; // points to the first 1 of the reversed second half

  while (right != null) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
}

let = head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${isPalindromicLinkedList(head)}`);
