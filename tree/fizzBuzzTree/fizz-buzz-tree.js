'use strict';

function evaluator(val) {
  switch(val) {
  case val % 3 === 0 && val % 5 === 0:
    val = 'FizzBuzz';
    break;
  case val % 3 === 0:
    val = 'Fizz';
    break;
  case val % 5 === 0:
    val = 'Buzz';
    break;
  default:
    break;
  }
  return val;
}

function FizzBuzzTree(tree) {
  let _walk = (node) => {
    evaluator(node.value);
    if(node.left) { _walk(node.left); }
    if(node.right) { _walk(node.right); }
  };
  _walk(tree.root);
  return tree;
}
