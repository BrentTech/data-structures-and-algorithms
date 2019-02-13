'use strict';

function depthFirstSearch(adjList) {
  let root = adjList[0];
  let visited = new Set();
  function _walk(vertex) {
    visitied.add(vertex);
    let neighbors = adjList.getNeighbors(vertex);
    for(let i = 0; i < neighbors.length; i++) {
      if(!visited.has(neighbors[i])) {
        _walk(neightbors[i]);
      }
    }
  }
  _walk(root);
  if(visitied.has(!adjList.getNeightbors(root))) {
    _walk(root);
  }
  return(visited);
}