// Doubly Linked List

/*
Time Complexity of Doubly Linked List:

Access: O(N)

Search: O(N)

Insertion: O(1)

Removal: O(1)
*/

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // isEmpty - Is to check whether list is empty.
    isEmpty() {
        return !this.head;
    }

    // push - To add item to last of list.
    push(newVal) {
        const newNode = new Node(newVal);

        if(this.isEmpty()) {
            this.head = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        return ++this.length;
    }

    // unshift - To add item to begining of list
    unshift(newVal) {
        const newNode = new Node(newVal);

        if(this.isEmpty()) {
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;          
        }

        this.head = newNode;
        return ++this.length;
    }

    // insert - adding a node in a list at a certain position.
    insert(index, newVal) {
        if(index < 0 || index > this.length) {
            return false;
        }

        if(index === 0) {
            return !!this.unshift(newVal);
        }else if(index === this.length) {
            return !!this.push(newVal);
        }else {
            const newNode = new Node(newVal);
            const prevNode = this.get(index-1);
            const nextNode = prevNode.next;
            
            newNode.prev = prevNode;
            newNode.next = nextNode;
            prevNode.next = newNode;
            nextNode.prev = newNode;

            this.length++;
        }

        return true;
    }

    // remove - removing a item in a list at a certain position.
    insert(index, newVal) {
        if(index < 0 || index > this.length) {
            return false;
        }

        if(index === 0) {
            return this.shift();
        }else if(index === this.length) {
            return this.pop();
        }else {
            const removedNode = this.get(index);
            const prevNode = removedNode.prev;
            const nextNode = removedNode.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.prev = null;
            removedNode.next = null;

            this.length--;

            return removedNode;
        }
    }

    // pop - To remove item from last of list.
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        const removedNode = this.tail;

        if(!removedNode.prev) {
            this.tail = null;
            this.head = null;
        }else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        
        this.length--;

        return removedNode;
    }

    // shift - To remove item from begining of the list.
    shift() {
        if(this.isEmpty()) {
            return undefined;
        }

        const removedNode = this.head;

        if(!removedNode.next) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    // get - to access value from specific position of list
    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined;
        }

        if(index <= this.length / 2) {
            let count = 0;
            let current = this.head;
    
            while(count !== index) {
                current = current.next;
                count++;
            }
    
            return current;
        }else {
            let count = this.length - 1;
            var current = this.tail;
            
            while(count !== index) {
              current = current.prev;
              count--;
            }

            return current;
        }
    } 

    // set: To set new value to specific position item.
    set(index, newVal) {
        const targetNode = this.get(index);

        if(!targetNode) {
            return false;
        }
        
        targetNode.value = newVal;
        return true;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next = null;

        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }

        return this;
    }
    
    // traverse - To traverse and display list
    traverse() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}


// TESTING

const list = new DoublyLinkedList();

list.push(10);
list.push(20);
// list.push(30);
// list.push(40);
