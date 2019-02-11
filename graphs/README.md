# Graphs
A graph data structure comprised of vertex (nodes) and edges. Each vertex can have as many edges as required and those edges may connect to any vertex (including itself). Edges can be given a weight, or cose, of traversal.

## Challenge
Impliment a Graph with the following methods: addNode, addEdge, getNodes, size, and getNeighbors.

## Approach & Efficiency
For my approach to making this graph class I started by looking into Vinicio's code demo, and the different methods available to me with Map in JS. From there I added the additional functionality that I was looking for with the class.

## API
#### addNode
Adds a new node to the graph. New node is an island.
#### addEdge 
Adds an edge between two nodes, and can add weight if desired.
#### getNodes
Returns an iterable object with all nodes in the graph
#### size
Returns the total number of nodes in the graph
#### getNeighbors
Returns all nodes that are neighbors with the given node.

### Attributions
Vinicio Sanchez - Basic Graph functionality