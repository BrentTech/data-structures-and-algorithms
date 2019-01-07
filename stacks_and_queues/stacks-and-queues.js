'use strict';

const util = require('util');


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) {
      throw 'Empty Stack';
    }
    let current = this.top;
    if (current.next) {
      this.top = current.next;
    }
    current.next = null;
  }

  peek() {
    if (!this.top) {
      throw 'Empty Stack';
    }
    // console.log(this.top);
    return this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (!this.front && !this.back) {
      this.front = node;
      this.back = node;
    }
    this.back.next = node;
    this.back = node;
  }

  dequeue() {
    if (!this.front) {
      throw 'Empty Stack';
    }
    let current = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    }
    this.front = current.next;
    current.next = null;

  }

  peek() {
    if (!this.front) {
      throw 'Empty Stack';
    }
    console.log(this.front);
    return this.front;
  }

}

module.exports = {Stack, Queue};


// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.peek();


// console.log(util.inspect(queue, {depth:10}));