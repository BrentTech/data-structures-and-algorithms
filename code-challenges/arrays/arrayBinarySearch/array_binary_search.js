'use strict';

function binarySearch (arr, key) {
  let midIdx = Math.ceil((arr.length / 2) - 1);
  let midVal = arr[midIdx];
  for (let i = 0; i < (arr.length / 2); i++) {
    if (midVal === key) {
      return midIdx;
    } else if (midVal < key) {
      midIdx = Math.ceil((2 * midIdx + midIdx) / 2);
      midVal = arr[midIdx];
    } else if (midVal > key) {
      midIdx = Math.floor(midIdx / 2);
      midVal = [midIdx];
    }
  }
  return -1;
}

module.exports = binarySearch;
