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