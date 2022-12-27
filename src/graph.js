class Graph {
    constructor() {
        this.nodes = [];
        this.adjList={};
    }

    addNode(node){
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1,node2){
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');

console.log(graph)
