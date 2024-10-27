// QUEUE


/*
What is a Queue?

- A FIFO(First In First Out) data structure
- The first element added to the queue will be the first element removed from the queue.
- Queues exist everywhere, think about the last you waited in line...

-  Where does queue use:
    1. Background tasks
    2. Uploading resources
    3. Print/Task processing

- Enqueue - Adding item
- Dequeue - Removing item
    
- There are more than one way of implementing queue.
    - Array implmentation using push() and shift() method
    - Linked list implmentation

- Big O of queue
    - Insertion - O(1)
    - Removal - O(1)
    - Search - O(n)
    - Access - O(n)
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding value to the end of queue 
  enqueue(newVal) {
    const newNode = new Node(newVal);

    if(!this.first) {
      this.first = newNode;
    }else {
      this.last.next = newNode;
    }

    this.last = newNode;
    return ++this.size;
  }

  // Removing value from the begining of queue
  dequeue() {
    if(!this.first) {
      return null;
    }

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;
    
    if(this.size === 0) {
      this.last = null;
    }

    return removedNode;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
