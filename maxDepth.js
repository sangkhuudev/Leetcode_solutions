/**
 *  Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
// ver 1: Using BFS
function maxDepth(root){
    if(!root) return 0;
    let queue = [root];
    let level = 0;
    while(queue.length>0){
        let length = queue.length;
        for(let i=0;i<length;i++){
            let node = queue.shift();
            queue.push(...node.children)
        }
        level++
    }
    return level
}
// ver 2: Using DFS
function maxDepth(root){
    if(!root) return 0;
    let max=1;
    const DFS = (node,level) =>{
        if(level>max) max=level;
        if(node.children){
            level++;
            for (const child of node.children) {
                DFS(child,level)
            }
        }
    }
    DFS(root,max);
    return max
}