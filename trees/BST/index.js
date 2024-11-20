// Binary Search tree


/*

Insertion 

TIME COMPLEXITY - O(LOGN) AND AUX SPACE COMPLEXITY - O(1)

Finding 

TIME COMPLEXITY - O(LOGN) AND AUX SPACE COMPLEXITY - O(1)

NOTE: FOR THE WORST-CASE SCENARIO IT CAN BE MORE THAN THIS.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(newValue) {
        const newNode = new Node(newValue);

        if(!this.root) {
            this.root = newNode;
            return this;
        }else {
            let current = this.root;

            while(current) {

                if(current.value === newValue) {
                    return undefined;
                }
                
                if(current.value < newValue){
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }else {
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
            }
        }

        
    }

    find(target) {
        if(!this.root) {
            return false;
        }else {
            let current = this.root;

            while(current) {
                if(current.value === target) {
                    return current;
                }
                else if(current.value < target) {
                    // Go right side
                    current = current.right;
                }else {
                    // Go left side
                    current = current.left;
                }
            }

            return false;
        }
    }
}

// const tree = new BinarySearchTree();

// tree.root = new Node(5);
// tree.root.right = new Node(10);
// tree.root.left = new Node(3);
// tree.root.left.right = new Node(4);

// TESTING

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(6);
tree.insert(21);
tree.insert(80);
tree.insert(2);
tree.insert(5);

tree.find(4); // true
tree.find(11); // false
