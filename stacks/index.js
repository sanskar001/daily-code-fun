// --------STACK------------

/*
What is a Stack?

- A LIFO (Last In First Out) data structure
- The last element added to the stack will be the first element removed from the stack.

- We have seen this before - Callstack
- Where stacks are used: 
    1. Managing function invocation
    2. Undo and redo
    3. Routing (the history object is treated like a stack)

- There are more than one way of implementing stack.
    - Array implmentation using push() and pop() method
    - Linked list implmentation

- Big O of stacks
    - Insertion - O(1)
    - Removal - O(1)
    - Search - O(n)
    - Access - O(n)
*/

// Stack implmentation using linked list (Here Top is begining of singly linked list)

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding value in begining
  push(val) {
    const newNode = new Node(val);

    if(!this.first) {
      this.last = newNode;
    }else {
      const temp = this.first;
      newNode.next = temp;
    }

    this.first = newNode;
    return ++this.size;
  }

  // Removing value from begining
  pop() {
    if(!this.first) {
      return null;
    }

    const removedNode = this.first
    this.first = removedNode.next;
    this.size--;

    if(this.size === 0) {
      this.last = null;
    }

    return removedNode;
  }
}

const stack  = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
