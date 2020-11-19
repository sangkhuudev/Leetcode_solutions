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
// ver 1: using BFS
function largestValues(root){
    if(!root) return [];
    let res = [];
    let queue = [root];
    while(queue.length > 0){
        let length= queue.length;
        let maxVal = -Infinity;
        for(let i=0;i < length; ++i){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            maxVal= Math.max(node.val,maxVal); 
        }
        res.push(maxVal)
    }
    return res
}
// ver 2: using DFS
function largestValues(root){
    if(!root) return [];
    let res = [];
    const DFS=  (root,level) =>{
        if(!root) return;
        if(level == res.length){
            res.push(root.val)
        }
        else{
            res[level] = Math.max(root.val,res[level])
        }
        DFS(root.left,level+1);
        DFS(root.right,level+1)
    }
    DFS(root,0)
    return res
}