//write three assertions per method for Stack and Queue

const stackAndQueue = require('./stacks-and-queues.js');


describe('Stack', () => {
  describe('New Stack', () => {
    it('should create a new stack with an empty node', () => {
      let stack = new stackAndQueue.Stack();
      expect(stack).toBeTruthy;
    });
  });

  describe('Push', () => {
    it('adds nodes with values', () => {
      let stack = new stackAndQueue.Stack();
      stack.push(3);
      expect(stack.top.value).toEqual(3);
      stack.push(2);
      expect(stack.top.value).toEqual(2);
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });
    it('places notes in order of last added first on top', () => {
      let stack = new stackAndQueue.Stack();
      stack.push(3);
      expect(stack.top.value).toEqual(3);
      stack.push(2);
      expect(stack.top.value).toEqual(2);
      expect(stack.top.next.value).toEqual(3);
      stack.push(1);
      expect(stack.top.value).toEqual(1);
      expect(stack.top.next.value).toEqual(2);
      expect(stack.top.next.next.value).toEqual(3);
    });
    it('should add an empty node if no value given', () => {
      let stack = new stackAndQueue.Stack();
      expect( () => stack.push() ).toThrow('No Value Given');
    });
  });

  describe('Pop', () => {
    it('should remove the top node', () => {
      let stack = new stackAndQueue.Stack();
      stack.push(2);
      stack.push(1);
    });
    it('should reassign the top pointer to the next node', () => {
      let stack = new stackAndQueue.Stack();
      stack.push(2);
      stack.push(1);
    });
    it('should throw Empty Stack if no top pointer present', () => {
      let stack = new stackAndQueue.Stack();
      expect( () => stack.pop() ).toThrow('Empty Stack');
    });
  });
  
});
