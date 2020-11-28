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
function deepestLeavesSum(root){
    let maxLevel = - Infinity ;
    let maxSum = 0;
    const DFS = (node,level) =>{
        if(!node) return ;
        if(level == maxLevel) maxSum+=node.val
        else if(level > maxLevel) {
            maxLevel = level ;
            maxSum = node.val;
        }    
        DFS(node.left,level+1);
        DFS(node.right,level+1)
    }
    DFS(root,0);
    return maxSum
}