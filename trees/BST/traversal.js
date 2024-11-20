// Binary Search tree


/*

Insertion 

TIME COMPLEXITY - O(LOGN) AND AUX SPACE COMPLEXITY - O(1)

Finding 

TIME COMPLEXITY - O(LOGN) AND AUX SPACE COMPLEXITY - O(1)

NOTE: FOR THE WORST-CASE SCENARIO IT CAN BE MORE THAN THIS.

Question: When to use BFS and DFS?
Answer: BFS is use for more deep tree and for more wide tree it will take more space(queue).
        DFS is use for more wide tree.


- DFS-Inorder 
    - Used commonly with BST.
    - Notice we get all nodes in the tree in their underlying ascending order.

- DFS-Preorder
    - Can be used to "export" a tree structure so that it is easily reconstructed or copied.

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
                else if(current.value < newValue){
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

    // Breadth First Search traverse
    BFS() {
        const result = [];
        const queue = [];
        let node = this.root;

        queue.push(this.root);

        while(queue.length) {
            node = queue.shift();
            result.push(node.value);

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

    // Depth First Search - Pre Order
    preOrderDFS() {
        const result = [];
        let current = this.root;

        function traverse(node) {
            result.push(node.value);

            if(node.left) {
                traverse(node.left);
            }

            if(node.right) {
                traverse(node.right);
            }
        }

        traverse(current);
        return result;
    }

    // Depth First Search - Post Order
    postOrderDFS() {
        const result = [];
        let current = this.root;

        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }

            if(node.right) {
                traverse(node.right);
            }

            result.push(node.value);
        }

        traverse(this.root);
        return result;
    }

    // Depth First Search - In Order
    inOrderDFS() {
        const result = [];
        let current = this.root;

        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }

            result.push(node.value);

            if(node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return result;
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

// tree.find(4); // true
// tree.find(11); // false

// tree.BFS();

// tree.preOrderDFS();

// tree.postOrderDFS();

tree.inOrderDFS();
