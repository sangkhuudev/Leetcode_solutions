/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root){
    if(!root) return [];
    let queue = [root];
    let res=[]
    while( queue.length >0){
        res.push(queue[queue.length-1].val);
        let nodes = queue;
        queue = []
        for(let node of nodes) {
            if(node.right) queue.push(node.right);
            if(node.left)  queue.push(node.left);
        }     
    }
    return res
}
function rightSideView2(root){
    if(!root) return [];
    let res=[]
    const DFS = (node,level)=>{
        if(!node) return;
        res[level]= node.val;
        DFS(node.left,level+1);
        DFS(node.right,level+1)
    }
    
    DFS(root,0)
    return res
}