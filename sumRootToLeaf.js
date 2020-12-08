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

function sumRootToLeaf( root ) {
    let res = 0;
    const DFS = (node,binary = '') =>{
        if(!node) return ;
        binary+=node.val;
        if(!node.left && !node.right) return res+=parseInt(binary,2)
        if(node.left) DFS(node.left,binary);
        if(node.right) DFS(node.right,binary)
    }
    DFS(root)
    return res
}
