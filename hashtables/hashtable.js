'use strict';

const LL = require('../linkedList/linked_list.js');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  add(key, value) {
    let hash = this.getHash(key);
    if ( !this.map[hash] ) { this.map[hash] = new LL.LinkedList(); }
    this.map[hash].append({[key]:value});
  }

  getHash(key) {
    let keyArr = String(key).split('');
    let num = keyArr.reduce( (a, v) => a + v.charCodeAt(0), 0);
    return Math.floor((num % 7) * this.size / 7);
  }

  contains(key) {
    let hash = this.getHash(key);
    if (this.map[hash]) {
      return (this.search(this.map[hash], key) ? true : false);
    }
    return false;
  }

  find(key) {
    let hash = this.getHash(key);
    let ll = this.map[hash];
    if (ll) {
      return (this.search(ll, key) ? this.search(ll, key).key : 'Key not found.');
    }
    return 'Key not found.';
  }

  search(linkedList, key) {
    let current = linkedList.head;
    let object = null;
    while(current) {
      if(Object.keys(current.value)[0] === key) {
        return ( object = current );
      }
      current = current.next;
    }
    return object;
  }

}

module.exports = Hashtable;