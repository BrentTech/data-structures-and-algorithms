'use strict';

const search = require('./array_binary_search.js');

describe('Binary search an array', () => {
  it('can search for a number', () => {
    expect(search([1, 4, 5, 6, 88, 453, 999], 453)).toEqual(5);
  });
  it('returns -1 if value is not in the array', () => {
    expect(search([1, 44, 99, 110], 5)).toEqual(-1);
  });
  it('returns -1 if the array is empty', () => {
    expect(search([], 5)).toEqual(-1);
  });
});


