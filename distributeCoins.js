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
function distributeCoins(root){
    let moves = 0;
    const DFS = node =>{
        if(!node) return 0 ;
        let left= DFS(node.left);
        let right = DFS(node.right)
        let value=node.val + left+right -1;
        moves+=Math.abs(value);
        return  value
    }
    DFS(root);
    return moves
}