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
 * @return {boolean}
 */
function isBalanced(root){
    const DFS = (node,level) =>{
        if(!node) return level ;
        let left= DFS(node.left,level+1);
        let right =DFS(node.right,level+1);
        if(left && right) return Math.abs(left-right) <2 ? Math.max(left,right) : 0;
        return 0 ;
    }
    return root ? DFS(root,0) : true 
}