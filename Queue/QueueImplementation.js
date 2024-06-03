class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length == 0) return undefined;
    let currentFirst = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      currentFirst.next = null;
    }
    this.length--;
    return currentFirst;
  }
}

let myQueue = new Queue(2);
myQueue.enqueue(1);

// (2) Items - Returns 2 Node
if (myQueue.length !== 0) {
  console.log(myQueue.dequeue().value);
} else {
  console.log('undefined');
}

// (1) Item - Returns 1 Node
if (myQueue.length !== 0) {
  console.log(myQueue.dequeue().value);
} else {
  console.log('undefined');
}

// (0) Items - Returns undefined
if (myQueue.length !== 0) {
  console.log(myQueue.dequeue().value);
} else {
  console.log('undefined');
}

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    undefined

*/
