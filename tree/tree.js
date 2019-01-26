'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];
    let _walk = (node) => {
      nodes.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return nodes;
  }

  inOrder() {
    let nodes = [];
    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      nodes.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }

  breadthFirst() {
    let queue = new Queue();
    queue.enqueue(this.root);
    while(queue.front) {
      console.log(queue.front.value);
      if(queue.front.left) {
        queue.enqueue(queue.front.left);
      }
      if(queue.front.right) {
        queue.enqueue(queue.front.right);
      }
      queue.dequeue();
    }
  }

  findMaxValue() { //less memory as breadth first due to O(w)
    let max = 0;
    const _walk = (node) => {
      if(node.value > max) { max = node.value; }
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };
    _walk(this.root);
    return max;
  }
}

// left is SMALLER, right is BIGGER

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let root = this.root;
    if(!root){
      this.root = new Node(value);
      return this.root;
    }
    let currentNode = root;
    let newNode = new Node(value);
    while(currentNode){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode;
          return newNode;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }    
  }

  contains(value) {
    let boolean = true;
    let _walk = (node) => {
      if(node === null) {
        boolean = false;
        return;
      } else if(value < node.value) {
        _walk(node.left);
      } else if(value > node.value) {
        _walk(node.right);
      } else if(value === node.value) {
        boolean = true;
        return;
      };
      _walk(this.root);
      return boolean;

  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};