'use strict';

const Stack = require('../stacks-and-queues.js');

let stack = new Stack.Stack();

class PseudoQueue{
  constructor(stack) {
    this.stack = stack;
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    let otherStack = new Stack.Stack();
    while(!this.stack.pop()) {
      otherStack.push(this.stack.pop());
    }
    let result = otherStack.pop();
    while(!otherStack.pop()){
      this.stack.push(otherStack.pop());
    }
    return result;
  }
}

module.exports = PseudoQueue;
