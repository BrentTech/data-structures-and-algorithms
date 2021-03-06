'use strict';

let BinaryTree = require('./tree.js').BinaryTree;
let Node = require('./tree.js').Node;

xdescribe('tree includes method', () => {
  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  let d = new Node(4);
  let e = new Node(5);
  let f = new Node(6);

  const myTree = new BinaryTree();
  myTree.root = a;
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  it('can handle an empty tree', () => {
    const logSpy = jest.spyOn(console, 'log');
    let tree = new BinaryTree();
    tree.breadthFirst();
    expect(logSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
  });

  it('handles a 1-node tree', () => {

    ( () => {
      let node = new Node(1);
      const myTree2 = new BinaryTree();
      myTree2.root = node;

      const logSpy = jest.spyOn(console, 'log');
      myTree2.breadthFirst();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith(1);
      expect(logSpy).toHaveBeenCalledTimes(1);
      logSpy.mockRestore();
    })();
  });

  it('handles a larger tree', () => {
    ( () => {
      const logSpy = jest.spyOn(console, 'log');
      let tree = new BinaryTree();
      tree.breadthFirst();
      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledWith(1);
      expect(logSpy).toHaveBeenCalledWith(2);
      expect(logSpy).toHaveBeenCalledWith(3);
      expect(logSpy).toHaveBeenCalledWith(4);
      expect(logSpy).toHaveBeenCalledWith(5);
      expect(logSpy).toHaveBeenCalledWith(6);
      expect(logSpy).toHaveBeenCalledTimes(6);
      logSpy.mockRestore();
    })();

  });

});

describe('Max Value Search', () => {
  it('finds the maximum value in a tree', () => {
    let a = new Node(1);
    let b = new Node(4);
    let c = new Node(13);
    let d = new Node(111);
    let e = new Node(89);
    let f = new Node(7);
  
    let tree = new BinaryTree();
    tree.root = a;
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    expect(tree.findMaxValue()).toEqual(111);
  });
});