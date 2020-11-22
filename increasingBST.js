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
 * @return {TreeNode}
 */
function increasingBST(root){
    let list = new TreeNode();
    let node = list;
    const traverse = root =>{
        if(!root) return ;
        traverse(root.left);
        node.right = root;
        node = node.right;
        node.left = null ;
        traverse(root.right)
    }
    traverse(root);
    return list.right
}