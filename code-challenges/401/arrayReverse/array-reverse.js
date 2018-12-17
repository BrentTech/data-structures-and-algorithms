'use strict';

function reverseArray (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - i - 1];
  }
  return newArray;
}