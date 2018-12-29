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
}

// let list = new LinkedList();
// list.append(3);
// list.insert(1);
// list.append(5);
// list.insertBefore(3, 2);
// list.insertAfter(3, 4);

module.exports = { LinkedList };

// console.log(util.inspect(list,{depth:10}));