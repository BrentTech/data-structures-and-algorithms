'use strict';

const Stack = require('../stacks-and-queues.js');
const PseudoQueue = require('./queue-with-stacks.js');

describe('Queue with stack', () => {
  describe('Enqueue method', () => {
    it('should create a queue/stack with nodes', () => {
      let qWS = new PseudoQueue();
      qWS.enqueue(1);
      expect(qWS).toBeTruthy();
      expect(qWS.stack.top.value).toEqual(1);
    });
    it('should place enqueued node on top of stack', () => {
      let qWS = new PseudoQueue();
      qWS.enqueue(1);
      expect(qWS.stack.top.value).toEqual(1);
      qWS.enqueue(2);
      expect(qWS.stack.top.value).toEqual(2);
      qWS.enqueue(3);
      expect(qWS.stack.top.value).toEqual(3);
    });
    it('should throw exception if empty node added', () => {
      let qWS = new PseudoQueue();
      expect( () => qWS.enqueue() ).toThrow('No Value Given');
    });
  });
  describe('Dequeue Method', () => {
    it('should remove and return the first node added', () => {
      let qWS = new PseudoQueue();
      qWS.enqueue(1);
      qWS.enqueue(2);
      qWS.enqueue(3);
      expect(qWS.dequeue().value).toEqual(1);
    });
    it('should not change the order of the stack', () => {
      let qWS = new PseudoQueue();
      qWS.enqueue(1);
      qWS.enqueue(2);
      qWS.enqueue(3);
      qWS.dequeue();
      expect(qWS.top.value).toEqual(3);
      expect(qWS.top.value).toEqual(2);
      expect(qWS.top.value).toBeNull();
    });
  });
});
