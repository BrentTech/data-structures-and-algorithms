'use strict';

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let results = [];
  let idxL = 0;
  let idxR = 0;
  while (idxL < left.length && idxR < right.length) {
    if(left[idxL] < right[idxR]) {
      results.push(left[idxL]);
      idxL++;
    } else {
      results.push(right[idxR]);
      idxR;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}