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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = '';
    if (temp === null) {
      console.log('empty');
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += ' -> ';
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  reverseBetween(m, n) {
    let locationValue1, locationValue2;
    let temp = this.head;
    let counter = 0;

    if (!this.head) {
      return this;
    }

    while (temp) {
      if (counter == m) locationValue1 = temp;
      if (counter == n) locationValue2 = temp;
      counter++;
      temp = temp.next;
    }
    let te = locationValue1.value;
    locationValue1.value = locationValue2.value;
    locationValue2.value = te;
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log('Original list:');
myLinkedList.printList();
console.log('----------------');

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1 -> 2 -> 3 -> 4 -> 5
  List after reversing between indexes of 2 and 4:
  1 -> 2 -> 5 -> 4 -> 3
*/
