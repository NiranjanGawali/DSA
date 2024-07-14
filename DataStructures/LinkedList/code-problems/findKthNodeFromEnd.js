class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  findKthFromEnd(k) {
    if (!this.head || k < 1) return null;

    let first = this.head;
    let second = this.head;

    for (let i = 0; i < k; i++) {
      // Moving first to k steps ahead, this creates a gap of k node between first and second
      if (first === null) return null; // k is greater than the length of the list
      first = first.next;
    }
    while (first !== null) {
      first = first.next;
      second = second.next; //Move both first and second pointers one step at a time. When first reaches the end (null), second will be at the kth node from the end.
    }
    return second;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log('Not found');
}

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
