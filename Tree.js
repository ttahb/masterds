class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;

            while(true){
                if(currentNode.value > value){

                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    
                    currentNode = currentNode.left;
                } else {

                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
            
        }
    }

    lookup(value){

        let currentNode = this.root;

        while(currentNode !== null){

            if(value === currentNode.value){
                return currentNode;
            } else {
                if(value < currentNode.value){
                    if(!currentNode.left){
                        return null;
                    }
    
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right){
                        return null;
                    }

                    currentNode = currentNode.right;
                }
            }           
        }

        return null;
    }

    remove(value){
        //if there is no node, return false;
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;

        while(currentNode){
            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value){
                //Case 1: Node to be deleted has no child i.e. leaf node
                if(currentNode.left === null && currentNode.right === null){
                    // if tree has only one node 
                    if(parentNode === null){
                        this.root = null;
                        return;
                    } else if (currentNode === parentNode.right){
                        parentNode.right = null;
                        return;
                    } else if(currentNode === parentNode.left){
                        parentNode.left = null;
                        return;
                    }
                } 
                // Case 2: When node to be deleted has one child
                else if(currentNode.left === null && currentNode.right !== null){
                    parentNode.right = currentNode.right;
                    return;
                }
                else if(currentNode.right === null && currentNode.left !== null){
                    parentNode.left = currentNode.left;
                    return;
                } 

                //Case 3: When node to be deleted has two child, and its right child is the successor.
                else if(currentNode.right.left === null){
                    currentNode.right.left = currentNode.left;
                    parentNode.right = currentNode.right;
                    return;
                }

                //Case 4: When node to be deleted has two child, and right child's left descendents is the successor
                else if(currentNode.right.left !== null){
                    let successor = currentNode.right.left;
                    let successorParent = currentNode.right;

                    while(successor.left !== null){
                        successorParent = successor;
                        successor = successor.left;
                    }

                    successorParent.left = successor.right;
                    successor.left = currentNode.left;
                    successor.right = currentNode.right;
                    parentNode.right = successor;
                    return;
                }

            } else {
                return false;
            }

        }
        
    }

    inOrder(node, list){
        if(node.left){
            this.inOrder(node.left, list);
        }
        
        list.push(node.value);
        
        if(node.right){
            this.inOrder(node.right, list);
        }
        return list;
    }
    

    breadthFirstSearch() {
	
        let list = [];
        let queue = [];
            
        let currentNode = this.root;
        queue.push( currentNode);
            
        while( queue.length > 0 ) {
                
            currentNode = queue.shift();
            list.push(currentNode.value);
        
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
        
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
        }
            
        return list;
    }

    depthFirstSearchInOrderIterative(){
        let current = this.root;
        let list = [];
        let stack = [];

        while( stack.length || current ){

            if(current){
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                list.push(current.value);
                current = current.right;
            }
        }
        return list;
    }

    depthFirstSearchInOrderRecursive(){
        return this.inOrder(this.root, []);
    }
    
        
}



const tree = new Tree();
tree.insert(50);
tree.insert(73);
tree.insert(62);
tree.insert(87);
tree.insert(84);
tree.insert(93);
tree.insert(85);
tree.insert(79);
tree.insert(77);
tree.insert(78);
// tree.inOrder(tree.root);

// tree.remove(73);
// console.log(tree);
//console.log(tree.breadthFirstSearch());
//console.log(tree.depthFirstSearchInOrderIterative());
console.log(tree.depthFirstSearchInOrderRecursive());
