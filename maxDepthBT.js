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
 * @return {number}
 */
// ver 1 : Using BFS
function maxDepth(root){
    if(!root) return 0;
    let queue = [root];
    let level =0;
    while(queue.length > 0){
        let length=queue.length ;
        for(let i=0;i<length;++i){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        level++
    }
    return level
}
// ver 2: Using DFS
function maxDepth2(root){
    if(!root) return 0;
    let max = 1;
    const DFS = (node,level) =>{
        if(level>max) max = level;
        level++;
        if(node.left){
            DFS(node.left,level)
        }
        if(node.right){
            DFS(node.right,level)
        }
    }
    DFS(root,max);
    return max
}