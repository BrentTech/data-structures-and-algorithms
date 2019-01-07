'use strict';

const Stack = require('../stacks-and-queues.js');
const PseudoQueue = require('./queue-with-stacks.js');

let stack = new Stack.Stack();

describe('Queue with stack', () => {
  describe('Enqueue method', () => {
    it('should create a queue/stack with nodes', () => {
      let queueWithStack = new PseudoQueue(stack);
      queueWithStack.enqueue(1);
      expect(queueWithStack).toBeTruthy();
      expect(stack.top.value).toEqual(1);
    });
    it('should place enqueued node on top of stack', () => {
      let queueWithStack = new PseudoQueue(stack);
      queueWithStack.enqueue(1);
      expect(stack.top.value).toEqual(1);
      queueWithStack.enqueue(2);
      expect(stack.top.value).toEqual(2);
      queueWithStack.enqueue(3);
      expect(stack.top.value).toEqual(3);
    });
    it('should throw exception if empty node added', () => {
      let queueWithStack = new PseudoQueue(stack);
      expect( () => queueWithStack.enqueue() ).toThrow('No Value Given');
    });
  });
  // describe('Dequeue Method', () => {
  //   it('should remove and return the first node added', () => {
  //     let queueWithStack = new PseudoQueue(stack);
  //     queueWithStack.enqueue(1);
  //     queueWithStack.enqueue(2);
  //     queueWithStack.enqueue(3);
  //     expect(queueWithStack.dequeue().value).toEqual(1);
  //   });
  // it('should not change the order of the stack', () => {
  //   let queueWithStack = new PseudoQueue(stack);
  //   queueWithStack.enqueue(1);
  //   queueWithStack.enqueue(2);
  //   queueWithStack.enqueue(3);
  //   queueWithStack.dequeue();
  //   expect(queueWithStack.top.value).toEqual(3);
  //   expect(queueWithStack.top.value).toEqual(2);
  //   expect(queueWithStack.top.value).toBeNull();
  // });
  // });
});
