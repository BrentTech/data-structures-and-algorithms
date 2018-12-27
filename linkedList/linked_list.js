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

  add(value) {
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
}

let list = new LinkedList();
list.add('Brent');
list.add('Kristin');
list.add('Chewy');
list.add('Wicket');
list.insert('Test');
list.insert('Another Test');

console.log(util.inspect(list,{depth:10}));