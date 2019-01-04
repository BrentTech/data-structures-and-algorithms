'use strict';

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if ( !this.head ) {
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    if ( !this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    do {
      current = current.next;
    } while (current.value !== value);
    node.next = current.next;
    current.next = node;
  }

  insertBefore(value, newValue) {
    let node = new Node(newValue);
    if ( !this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    let previous = this.head;
    while(current.value !== value) {
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
  }

  kthFromEnd(input) {
    if (!this.head) {
      throw 'Exception';
    }

    let current = this.head;
    let count = 1;
    while(current.next) {
      current = current.next;
      count++;
    }
    if ( input > count ) {
      throw 'Exception';
    }

    let calcNum = count - input;
    current = this.head;
    count = 1;
    while (count !== calcNum) {
      current = current.next;
      count++;
    }
    return current.value;
  }

  print() {
    if (!this.head) {
      throw 'Exception';
    }

    let current = this.head;
    while(current.next) {
      console.log(current);
      current = current.next;
    }
    console.log(current);
  }

}

function mergeLists(listOne, listTwo) {
  if (!listOne.head || !listTwo.head) {
    throw 'Exception';
  }
  
  let current1 = listOne.head;
  let current2 = listTwo.head;
  let next1;
  let next2;

  while(current1 && current2) {
    next1 = current1.next;
    next2 = current2.next;

    current2.next = next1;
    current1.next = current2;

    current1 = next1;
    current2 = next2;
  }
  let newHead = listOne.head;
  return newHead;
}

function reverse(list) {
  let current = list.head;
  while(current.next) {
    let next = current.next;
    current.next = current;
    current = next;
  }
}

let listOne = new LinkedList();

listOne.append(1);
listOne.append(1);
listOne.append(1);

// let listTwo = new LinkedList();

// listTwo.append(2);
// listTwo.append(2);
// listTwo.append(2);

// mergeLists(listOne, listTwo);
reverse(listOne);


module.exports = { LinkedList };

console.log(util.inspect(listOne,{depth:10}));




var reverseLinkedList = function(linkedlist) {
  var node = linkedlist;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;   // Cha
};
