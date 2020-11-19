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
//ver 1:  using BFS
function findBottomLeftValue(root){
    if(!root) return null;
    let queue  = [root];
    while(queue.length > 0){
        let length = queue.length ;
        let current = []
        for(let i=0;i<length;++i){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            current.push(node.val)
        }
        if(!queue.length) return current[0]
    }
}
// ver 2: using DFS
function findBottomLeftValue2(root){
    let node = { max : 1, leftBottom : root.val};
    const DFS = (root, level, node) =>{
        if(node.max<level){
            node.max= level ;
            node.leftBottom = root.val;
        }
        if(root.left) DFS(root.left, level+1,node);
        if(root.right) DFS(root.right,level+1,node);
        return node.leftBottom
    }
    return DFS(root,1,node)
}