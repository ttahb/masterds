//Graph  Representation using ---- Adjacency Matrix


class Graph {

    constructor() {
        this.adjMatrix = [];
        this.verticesList = [];
    }

    addVertex(node) {
        this.verticesList.push(node);
    }

    createAdjacenyMatrix() {
        let vlen = this.verticesList.length;
        if (vlen !== 0) {
            for (let i = 0; i < vlen + 1; i++) {
                let row = [];
                for (let i = 0; i < vlen + 1; i++) {
                    row.push(0);
                }
                this.adjMatrix.push(row);
            }
        }
    }

    addEdge(x, y) {
        if (this.verticesList.length !== 0 && this.adjMatrix.length === 0) {
            this.createAdjacenyMatrix();
            this.addNodes(x, y);
        } else {
            this.addNodes(x, y);
        }
    }

    addNodes(x, y) {
        this.adjMatrix[x][y] = 1;
        this.adjMatrix[y][x] = 1;
    }

    displayAdjacencyMatrix() {
        return this.adjMatrix;
    }

    breadthFirstSearch(node){
        
        // traversedList - contains all those nodes whose neighouring nodes are visited once completly
        let traversedList = [];
        let len = this.adjMatrix.length;

        // Assigning false values to all nodes never visited 
        let visited = [];
        for(let i=0; i < len;i++ ){
            visited[i] = false;
        }

        let queue = [];
        queue.push(node);
        visited[node] = true;

        while(queue.length > 0){
            let current = queue.shift();

            for(let i = 0; i < len; i++){
                if(this.adjMatrix[current][i] === 1){
                    if(!visited[i]){
                        queue.push(i);
                        visited[i] = true;
                    }
                }
            }

            traversedList.push(current);
        }

        return traversedList;
    }
}


let graph = new Graph();
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addVertex('7');


graph.addEdge('1', '2');
graph.addEdge('1', '3');
graph.addEdge('1', '4');
graph.addEdge('2', '3');
graph.addEdge('3', '4');
graph.addEdge('3', '5');
graph.addEdge('4', '5');
graph.addEdge('5', '6');
graph.addEdge('5', '7');

//console.log(graph.displayAdjacencyMatrix());
console.log(graph.breadthFirstSearch(5));