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

  breadthFirst(tree) {
    let node = tree.root;
    let queue = new Queue();
    queue.enqueue(node);
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

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    
  }

  contains(value) {

  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};