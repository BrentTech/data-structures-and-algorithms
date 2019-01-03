'use strict';

const list = require('./linked_list.js');

describe('Linked List', () => {
  it('includes nodes with values', () => {
    let ll = new list.LinkedList();
    ll.insert(1);
    ll.append(2);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.value).toEqual(1);
  });

  it('has a tail that is null', () => {
    let ll = new list.LinkedList();
    ll.insert(1);
    ll.append(2);
    expect(ll.head.next.next).toEqual(null);
  });
});

describe('Linked List Insert', () => {
  it('should insert a new node at the start of the list', () => {
    let ll = new list.LinkedList();
    ll.append(2);
    ll.append(3);
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
  });
  it('should insert a new node at the begining with an undefined value if no value given', () => {
    let ll = new list.LinkedList();
    ll.append(2);
    ll.append(3);
    ll.insert();
    expect(ll.head.value).toBeUndefined();
  });
  it('should insert a new node as list head if list empty', () => {
    let ll = new list.LinkedList();
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
  });
});

describe('Linked List Append', () => {
  it('should insert a new node at the end of the list', () => {
    let ll = new list.LinkedList();
    ll.insert(2);
    ll.append(3);
    ll.insert(1);
    expect(ll.head.next.next.value).toEqual(3);
  });
  it('should insert a new node at the begining with an undefined value if no value given', () => {
    let ll = new list.LinkedList();
    ll.insert(2);
    ll.append();
    ll.insert(1);
    expect(ll.head.next.next.value).toBeUndefined();
  });
  it('should insert a new node as list head if list empty', () => {
    let ll = new list.LinkedList();
    ll.append(1);
    expect(ll.head.value).toEqual(1);
  });
});

describe('Linked List Insert Before', () => {
  it('should insert 2 before 3', () => {
    let ll = new list.LinkedList();
    ll.insert(1);
    ll.append(3);
    ll.append(4);
    ll.insertBefore(3, 2);
    expect(ll.head.next.value).toEqual(2);
  });
});

describe('Linked List Insert After', () => {
  it('should insert 4 after 3', () => {
    let ll = new list.LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(3, 4);
    expect(ll.head.next.next.next.value).toEqual(4);
  });
});

describe('Linked List Kth From End', () => {
  it('should not run if empty list', () => {
    let ll = new list.LinkedList();
    expect(() => ll.kthFromEnd(1)).toThrow('Exception');
  });
  it('should throw if input is larger than list', () => {
    let ll = new list.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    expect(() => ll.kthFromEnd(18)).toThrow('Exception');
  });
  it('should return the value of the input number of nodes from the end of the lsit', () => {
    let ll = new list.LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    expect(ll.kthFromEnd(1)).toEqual(4);
    expect(ll.kthFromEnd(4)).toEqual(1);
    expect(ll.kthFromEnd(0)).toEqual(5);
  });

  describe('Merge two Linked Lists', () => {
    it('should not run if empty list', () => {
      let ll = new list.LinkedList();
      let ii = new list.LinkedList();
      expect(() => mergeLists(ll, ii).toThrow('Exception'));
    });
    it('should merge two lists of different sizes', () => {
      let ll = new list.LinkedList();
      ll.append(1);
      ll.append(2);
      ll.append(3);
      ll.append(4);
      let ii = new list.LinkedList();
      ii.append(1);
      ii.append(2);
      mergeLists(ll, ii);
      expect(ll.head.value).toEqual(1);
      expect(ll.head.next.value).toEqual(1);
      expect(ll.head.next.next.next.nextvalue).toEqual(3);
    });
    it('should return merge two lists', () => {
      let ll = new list.LinkedList();
      ll.append(1);
      ll.append(3);
      let ii = new list.LinkedList();
      ii.append(2);
      ii.append(4);
      mergeLists(ll, ii);
      expect(ll.head.value).toEqual(1);
      expect(ll.head.next.value).toEqual(2);
      expect(ll.head.next.next.value).toEqual(3);
      expect(ll.head.next.next.next.nextvalue).toEqual(4);
    });
  });
});
