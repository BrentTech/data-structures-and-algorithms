'use strict';

function insertShiftArray(arr, val) {
  if(Array.isArray(arr) === false) {
    return null;
  };

  let newArr = [];
  
  for (let i = 0; i <= arr.length - 1; i++) {
    newArr[i] = arr[i]
  };
  
  let center = Math.ceil(newArr.length / 2 - 1);

  for (let i = newArr.length - 1; i >= center; i--) {
    newArr[ i + 1 ] = newArr[ i ];
  }
  newArr[center] = val;  
  return newArr;
}

module.exports = insertShiftArray;
