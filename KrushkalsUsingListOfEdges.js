/*
Graph's findMST fn returns set of edges which forms a MST using Kruskal's algorithm.
A weighted graph with several edges can be added in this Graph class using addEdge method
with the x,y being the nodes and 'w' as edge's weight.
In the code below, I add a graph with 9 edges and 7 vertices and find a minimum spanning tree of 6 edges.
using the Kruskal's algorithm/
*/
class Graph {

    constructor(vertices){
        this.edgeList = [];
        this.vertices = vertices;
        this.included = [];
        this.set = [];
    }

    addEdge(x,y,w){
        this.edgeList.push([x,y,w]);
    }

    findMST(){

        let mstEdgeList = [];
        // Marking each vertex as its own root initially, number of vertices will be provided by user.
        let k = this.vertices +1;
        while(k--) this.set[this.vertices]=-1;

        let len = this.edgeList.length;
      
        //1. find minimum weight edge first
        while(len--) this.included[len] = 0; // creates [0,0,0,0,0,0,0,0,0]
        
        while(mstEdgeList.length !== this.vertices-1){
            let minEdgeIndex = this.getMinEdge();
            let u = this.edgeList[minEdgeIndex][0];
		    let v = this.edgeList[minEdgeIndex][1];
		    // if both vertices are their own roots else ..
		    if(this.set[u] === -1 && this.set[v] === -1){
	            this.union(u,v);
	            mstEdgeList.push(this.edgeList[minEdgeIndex]);
            } else {
	            let root_u = this.find(u);
	            let root_v = this.find(v);
                // if both has same root, means vertices forms a cycle so we will skip the
                //edge
                if( root_u == root_v) {
            	    continue; 
                } else {
		            this.union(root_u, root_v);
                    mstEdgeList.push(this.edgeList[minEdgeIndex]);
                }
            }

        }

        return mstEdgeList;
    }

    //x - node for which its root node's index to be detected
    find(x){
        while(this.set[x]>0){
            x = this.set[x];
        }
        return x;
    }

    //Assuming x,y being positive indexs of the roots which will form a union.
    union(x,y){
        if(this.set[x] < this.set[y]){
            this.set[x] = this.set[x]+this.set[y];
            this.set[y] = x;
        } else {
            this.set[y] = this.set[x]+this.set[y];
            this.set[x] = y;
        }
    }

    getMinEdge(){
        let minWeight = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        for(let i=0;i<this.edgeList.length;i++){
            if(this.edgeList[i][2]<minWeight && this.included[i] !== 1){
                minWeight = this.edgeList[i][2];
                minIndex = i;
            }
        }

        //mark the included edge to skip in next iteration
        this.included[minIndex] = 1;
        return minIndex;
    }
    
}

const graph = new Graph(7)
graph.addEdge(1,2,25);
graph.addEdge(1,6,5);
graph.addEdge(2,3,12);
graph.addEdge(2,7,10);
graph.addEdge(3,4,8);
graph.addEdge(4,5,16);
graph.addEdge(4,7,14);
graph.addEdge(5,6,20);
graph.addEdge(5,7,18);



//Test 2
// const graph = new Graph(8);
// graph.addEdge(0,1,10);
// graph.addEdge(1,4,0);
// graph.addEdge(4,7,8);
// graph.addEdge(7,6,12);
// graph.addEdge(6,3,7);
// graph.addEdge(3,0,4);
// graph.addEdge(0,2,1);
// graph.addEdge(2,5,8);
// graph.addEdge(5,7,9);
// graph.addEdge(1,2,3);
// graph.addEdge(4,5,1);
// graph.addEdge(2,3,2);
// graph.addEdge(5,3,2);
// graph.addEdge(5,6,6);




console.log(graph.findMST());

