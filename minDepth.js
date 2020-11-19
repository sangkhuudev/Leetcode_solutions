1/**
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
function TreeNode( val,left,right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right==undefined ? null : right);
}
function minDepth( root ){
    if(!root) return 0;
    let min = Infinity;
    const findDepth = (node,depth) =>{
        if(!node) return 0;
        if(node.left == null && node.right == null){
            min=Math.min(depth,min)
        }
        findDepth(node.left,depth+1);
        findDepth(node.right,depth+1)
    }
    findDepth(root,1);
    return min
}