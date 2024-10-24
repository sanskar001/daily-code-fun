// SINGLY LINKED LISTS

/*

What is a linked list?

- A data structure that contains a head, tail and length property.
- Linked list consist of nodes, and each node has a value and a pointer to another node or null.

Operations: 

1. push - O(1)
2. unshift - O(1)
3. insert - O(n)

4. pop - O(n)
5. shift - O(1)
6. remove - O(n)

7. get - O(n)
8. set - O(n)

9. reverse - O(n)
10. traverse - O(n)
*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// This below is representation of singly linked list (Bad way doing this)

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
    pop() {
        if(!this.head){
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift() {
        if(!this.head){
            return undefined;
        }

        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        
        if(this.length === 0) {
            this.tail = null;
        }
        
        return oldHead;
    }
    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }

        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }
    set(index, newVal) {
        const node = this.get(index);
        if(node) {
            node.val = newVal;
            return true;    
        }else {
            return false;
        }   
    }
    insert(index, newVal) {
        if(index < 0 || index > this.length) {
            return false;
        }

        if(index === 0) {
            this.unshift(newVal);
        }else if(index === this.length) {
            this.push(newVal);
        }else {
            const newNode = new Node(newVal);
            const lastNode = this.get(index-1);

            newNode.next = lastNode.next;
            lastNode.next = newNode;
            this.length++;
        }
        
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }

        if(index === 0) {
            return this.shift();
        }else if(index === this.length) {
            return this.pop();
        }else {
            const lastNode = this.get(index-1);
            const currentNode = lastNode.next;

            lastNode.next = currentNode.next;
            this.length--;
            return currentNode;
        }
    } 
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    } 
}

const list = new SinglyLinkedList();

list.push("10");
list.push("20");
list.push("30");
list.push("40");

/*

10 -> null

20 -> 10 -> null

30 -> 20 -> 10 -< null

*/
