'use strict';

function leftJoin (lHash, rHash) {
  let resultHash = [...lHash];
  for(let i = 0; i < resultHash.length; i++) {
    if(rHash.contains(resultHash[i].key)) {
      resultHash.add(rHash[i].key, rHash[i].value);
    } else {
      resultHash.add(rHash[i].key, null);
    }
  }
  return resultHash;
}