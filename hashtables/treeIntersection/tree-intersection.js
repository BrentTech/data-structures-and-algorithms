'use strict';

const Hashtable = require('../Hashtable.js');

function treeIntersection(tree1, tree2) {
  let hashmap = new Hashtable();
  let result = [];

  const _walk = node => {
    if(!hashmap.contains(node.value)) {
      hashmap.add(node.value);
    }
    if(node.left) {_walk(node.left); }
    if(node.right) {_walk(node.right); }
  };

  const _walkCheck = node => {
    if(hashmap.contains(node.value)) {
      result.push(node.value);
    }
    if(node.left) {_walkCheck(node.left); }
    if(node.right) {_walkCheck(node.right); }
  };

  _walk(tree1.root);
  _walkCheck(tree2.root);
  return result;
}

module.exports = treeIntersection;
