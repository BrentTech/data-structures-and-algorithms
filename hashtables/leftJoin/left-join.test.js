const repeatedWord = require('./repeated-word.js');

describe('Repeated Word function', () => {
  it('should return the word that repeats first', () => {
    let string = 'This is a string. This is really great.';
    expect(repeatedWord(string)).toEqual('this');
  });

  it('should return null if no words repeat', () => {
    let string = 'This is a string with no repeated words';
    expect(repeatedWord(string)).toBeNull();
  });

  it('returns a string', () => {
    let string = 'This is a string. This is really great.';
    expect(typeof repeatedWord(string)).toEqual('string');
  });

});

