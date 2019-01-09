'use strict';

let mBV = require('./multi-bracket-validation.js');

describe('Multi Bracket Validation', () => {
  it('should only allow strings', () => {
    expect(mBV(2)).toBeFalsy();
  });
  it('returns true if the brackets are balanced', () => {
    let result = mBV('()(){}{}([[]])');
    expect(result).toEqual(true);
  });
  it('should return False if it starts with a closing bracket', () => {
    expect(mBV('){}[]{}()')).toBeFalsy();
  });
  it('should return False if brackets are not paired correctly', () => {
    expect(mBV('{]()[{}]')).toBeFalsy();
  });
  it('returns False if all open brackets', () => {
    expect(mBV('{([')).toBeFalsy();
  });
});

