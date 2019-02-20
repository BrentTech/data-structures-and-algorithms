'use strict';

function radixSort(arr){
  let finish = 0;
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].toString().length > finish) {
      finish = arr[i].toString().length;
    }
  }

  while(count < finish) {
    let map = new Hashmap();
    for(let i = 0; i < arr.length; i++) {
      let temp = arr[i].toString();
      map.add(temp[temp.length-(count + 1)], arr[i]);
    }
    for(let i = 0; i < arr.length; i++) {
      arr[i] = map.search(i).value;
    }
    count++;
  }
  return arr;
}