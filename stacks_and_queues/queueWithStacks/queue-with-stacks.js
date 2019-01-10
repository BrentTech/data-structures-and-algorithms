'use strict';

const Stack = require('../stacks-and-queues.js');

class PseudoQueue{
  constructor() {
    this.stack = new Stack.Stack();
    this.otherStack = new Stack.Stack();
  }

  enqueue(value) {
    this.stack.push(value);
  }

  dequeue() {
    let result;
    if(!this.stack.top) {
      throw 'Empty Stack';
    } else {
      while(!this.stack.top) {
        this.otherStack.push(this.stack.pop());
      }
      result = this.otherStack.pop();
    }
    while(!this.otherStack.top){
      this.stack.push(this.otherStack.pop());
    }
    return result;
  }
}

module.exports = PseudoQueue;
