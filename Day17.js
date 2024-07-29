//Activity 1

//task1--linked list
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const node1 = new node(2);
const node2 = new node(3);
const node3 = new node(4);

node1.next = node2;
node2.next = node3;

console.log(node1);
//task2--linked list
class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newnode = new node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }
  removenode() {
    let cuurnode = this.head;
    while (cuurnode.next !== this.tail) {
      currentnode = currentnode.next;
    }
    currentnode.next = null;
    this.tail = currentnode;
  }
  dispplaynode() {
    let currentnode = this.head;
    while (currentnode) {
      console.log(currentnode.value);
      currentnode = currentnode.next;
    }
  }
}
const linkedlis = new linkedlist();
linkedlis.addNode(3);
linkedlis.addNode(4);
linkedlis.addNode(7);
linkedlis.dispplaynode();

//Activity 3

class stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack[this.stack.length] = value;
  }
  pop() {
    this.stack.length = this.stack.length - 1;
  }
  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }
}

const sack = new stack();
sack.push(1);
sack.push(7);
sack.push(9);
sack.push(77);
sack.pop();
sack.peek();

//task4=---
class stack2 {
  constructor() {
    this.stack = [];
    this.reverse = "";
  }
  get(value) {
    for (let i of value) {
      this.stack.push(i);
    }
  }
  reversestac() {
    let length = this.stack.length;
    while (length > 0) {
      this.reverse += this.stack.pop();
      length--;
    }
    console.log(this.reverse);
  }
}
const rev = new stack2();
rev.get("apple");
rev.reversestac();

//Activty 3
//task5
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue[this.queue.length] = value; // or we can use array.push() method -> this.queue.push(value)
  }

  dequeue() {
    for (let i = 1; i < this.queue.length; i++) {
      //
      this.queue[i - 1] = this.queue[i]; // or we can use array.shift() method -> this.queue.shift()
    } //
    //
    this.queue.length = this.queue.length - 1; //
  }
  front() {
    console.log(this.queue[0]);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.front();
console.log(queue);
queue.dequeue();
queue.front();
console.log(queue);

//task6
class PrinterQueue {
  constructor() {
    this.queue = [];
  }

  addJob(value) {
    this.queue.push(value);
  }

  processJob() {
    let length = this.queue.length;
    while (length > 0) {
      console.log(this.queue.shift());
      length--;
    }
  }
}

const printer = new PrinterQueue();

printer.addJob("Job 1");
printer.addJob("Job 2");
printer.addJob("Job 3");
printer.addJob("Job 4");
printer.addJob("Job 5");
printer.processJob();

//Activity 4
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node11 = new TreeNode(2);
const node21 = new TreeNode(3);
const node31 = new TreeNode(4);

node11.right = node21;
node11.left = node31;

console.log(node1);

// Task 8: Implement a BinaryTree class with method for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left !== null) {
        this.insertNode(root.left, newNode);
      } else {
        root.left = newNode;
      }
    } else {
      if (root.right !== null) {
        this.insertNode(root.right, newNode);
      } else {
        root.right = newNode;
      }
    }
  }
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);

tree.inOrder(tree.root);

// ==========explanation of the code above================

// #************* Inserting Nodes**************
// -- Insert 10:
//    - The tree is empty, so 10 becomes the root node.

// -- Insert 5:
//    - 5 is less than 10, so it becomes the left child of 10.

// -- Insert 15:
//    - 15 is greater than 10, so it becomes the right child of 10.

// -- Insert 3:
//    - 3 is less than 10 and also less than 5, so it becomes the left child of 5.

// -- Insert 7:
//    - 7 is less than 10 but greater than 5, so it becomes the right child of 5.

// -- Insert 13:
//    - 13 is greater than 10 but less than 15, so it becomes the left child of 15.

// #************* Diagramatic representation**************

//        10
//       /  \
//      5    15
//     / \   /
//    3   7 13

//Activty 5(optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and a breadth-first search (BFS).

// =============================this is ChatGPT generated=======================================

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    // Perform a breadth-first search (BFS)
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]




// Task 10: Use the Graph class to represent a sirnple network and BFS to find the shortest path between two nodes.


// =============================this is ChatGPT generated=======================================


class Graph2 {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
        }
    }

    // Perform a breadth-first search (BFS) to find the shortest path
    bfsShortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start);

        while (queue.length > 0) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === end) {
                return path;
            }

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = path.concat(neighbor);
                    queue.push(newPath);
                }
            }
        }

        return null; // If no path is found
    }
}

// Example usage:
const graph2 = new Graph2();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "E");
graph2.addEdge("D", "E");
graph2.addEdge("D", "F");
graph2.addEdge("E", "F");

const shortestPath = graph2.bfsShortestPath("A", "F");
console.log(shortestPath); // Output: [ 'A', 'B', 'D', 'F' ]