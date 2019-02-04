'use strict';

import LL from '../linkedList/linked_list.js';

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  add(key, value) {
    let hash = this.getHash(key);
    if ( ! this.map[hash] ) { this.map[hash] = new LL.LinkedList(); }

    this.map[hash].insert({[key]:value});
  }

  contains(key) {
    let hash = this.getHash(key);
    if (this.map[hash]) {
      return true;
    }
    return false;
  }

  find(key) {
    let hash = this.getHash(key);
    if (this.map[hash]) {
      return this.map[hash];
    }
    return 'Key not found';
  }

  getHash(key) {
    return key.split('').reduce( (a, v) => a + v.charCodeAt(0), 0) % this.size;
  }

}