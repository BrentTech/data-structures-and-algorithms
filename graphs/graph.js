'use strict';

class Graph{
  constructor(){
    this.map = new Map();
  }

  addNode(node){
    this.map.set(node,[]);
    return this.map.get(node);
  }
  
  addEdge(startNode,endNode,wght = 0){
    if(!this.map.has(startNode) ||
       !this.map.has(endNode))
      throw new Error('Invalid edge');
    
    let edges = this.map.get(startNode);

    edges.push({
      node:endNode,
      wght,
    });
  }

  getNodes() {
    return this.map.entries();
  }

  size() {
    console.log('Graph size:', this.map.size());
    return this.map.size();
  }


  getNeighbors(node){
    if(!this.map.has(node))
      throw new Error('Invalid root node');
    
    return [...this.map.get(node)];
  }
};