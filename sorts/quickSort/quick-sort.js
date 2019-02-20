'use strict';

function quickSort(arr) {
  let low = 0;
  let high = arr.length - 1;
  function _qSort(arr, l, h) {
    if(l < h) {
      let p = part(arr, l, h);
      _qSort(arr, l, p - 1);
      _qSort(arr, p + 1, h);
    }
  }
  _qSort(arr, low, high);
  return arr;
}

function part(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for(let j = low; j <= high - 1; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}