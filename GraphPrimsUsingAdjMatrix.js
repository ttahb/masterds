/* implementing Prims algorithm using near array approach */
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
            for (let i = 0; i < vlen; i++) {
                let row = [];
                for (let i = 0; i < vlen; i++) {
                    row.push(Number.MAX_SAFE_INTEGER);
                }
                this.adjMatrix.push(row);
            }
        }
    }

    addEdge(x, y, weight) {
        if (this.verticesList.length !== 0 && this.adjMatrix.length === 0) {
            this.createAdjacenyMatrix();
            this.addNodes(x, y, weight);
        } else {
            this.addNodes(x, y, weight);
        }
    }

    addNodes(x, y, weight) {
        this.adjMatrix[x][y] = weight;
        this.adjMatrix[y][x] = weight;
    }

    displayAdjacencyMatrix() {
        return this.adjMatrix;
    }

    findMSTUsingPrims(){
        let len = this.adjMatrix.length;
        //primList - it will store all edges of MST using prim
        let primList = [];
        
        let near = [];
        for(let i=0;i<len;i++){
            near.push(Number.MAX_SAFE_INTEGER);
        }

        //Step 1 - Find an edge with minimum weight
        let min = Number.MAX_SAFE_INTEGER;
        
        let u, v;
        for(let row=0;row<len-1;row++){
            for(let col=row+1;col<len;col++){
                if(this.adjMatrix[row][col]<min){
                    min = this.adjMatrix[row][col];
                    u = row;
                    v = col;
                }
            }
        }
        
        //Adding the minimum weight edge to prim list
        primList.push([u,v]);
        //Marking visited nodes of minimum nodes in 'near' list.
        near[u] = -1;
        near[v] = -1;

        while(primList.length !== len-1){

            for(let i=0;i<near.length; i++){
                if(near[i] !== -1){
                    if(near[i] === Number.MAX_SAFE_INTEGER){
                        if(this.adjMatrix[i][u] < this.adjMatrix[i][v]){
                            near[i] = u;
                        } else {
                            near[i] = v;
                        }
                    } else {
                        if(this.adjMatrix[i][u]< this.adjMatrix[i][near[i]]){
                            near[i] = u;
                        }
    
                        if(this.adjMatrix[i][v] < this.adjMatrix[i][near[i]]){
                            near[i] = v;
                        }
                    }
                }
            }

            //find minimum of the edges in the 'near' list
            let minEdge = Number.MAX_SAFE_INTEGER;
            let x, y;
            for(let i=0; i<near.length; i++){
                if(near[i] !== Number.MAX_SAFE_INTEGER && near[i] !== -1){
                    if(this.adjMatrix[i][near[i]] < minEdge){
                        minEdge = this.adjMatrix[i][near[i]];
                        x = i;
                        y = near[i];
                    }
                }
            }

            primList.push([x,y]);
            near[x] = -1;
            near[y] = -1;
            u = x;
            v = y;
           

        }

        return primList;
        


    }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);

graph.addEdge(0,1,10);
graph.addEdge(1,4,0);
graph.addEdge(4,7,8);
graph.addEdge(7,6,12);
graph.addEdge(6,3,7);
graph.addEdge(3,0,4);
graph.addEdge(0,2,1);
graph.addEdge(2,1,3);
graph.addEdge(2,3,2);
graph.addEdge(2,5,8);
graph.addEdge(3,5,2);
graph.addEdge(5,4,1);
graph.addEdge(5,7,9);
graph.addEdge(5,6,6);

//console.log(graph.displayAdjacencyMatrix());
console.log(graph.findMSTUsingPrims());