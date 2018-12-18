'use strict';

const arrayShift = require('./array-shift.js');

describe('insertShiftArray function testing', () => {
  it('insert value into center of array', () => {
    expect(arrayShift([1,2,3,4,5],5)).toEqual([ 1, 2, 5, 3, 4, 5 ]);
  });

  it('it should return null', () => {
    expect(arrayShift('string',2)).toEqual(null);
  });

  it('it should return and array with an object inserted in the middle position', () => {expect(arrayShift([1,2,3,4,5],{ 'bob': 'is name', 'age': 'is old',})).toEqual([ 1, 2, { bob: 'is name', age: 'is old' }, 3, 4, 5 ]);
  });
});