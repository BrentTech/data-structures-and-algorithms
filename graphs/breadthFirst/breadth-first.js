const graph = require('../graph.js');

'use strict';

const breadthFirstTraversal = (graph, startNode, endNode) => {
  let queue = [];
  let visNodes = new Set();
  let parent = new Map();

  queue.unshift(startNode);
  visNodes.add(startNode);

  while(queue.length > 0){
    let currentNode = queue.pop();

    if(currentNode === endNode)
      return parent;

    let neighbors = graph.getNeighbors(currentNode);

    for(let neighbor of neighbors){
      let neighborNode = neighbor.node;

      if(visNodes.has(neighborNode))
        continue;
      else
        visNodes.add(neighborNode);
      
      parent.set(neighborNode,currentNode);
      queue.unshift(neighborNode);
    }
  }
  return null;
};

module.exports = breadthFirstTraversal;

//