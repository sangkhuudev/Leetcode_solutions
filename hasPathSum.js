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
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum){
    let res= false
    const DFS = (node,total=0) =>{
        if(!node) return false ;
        let current = total+ node.val
        DFS(node.left,current);
        DFS(node.right,current);
        if(!node.left && !node.right && current == sum) res = true ;
    }
    DFS(root);
    return res
}