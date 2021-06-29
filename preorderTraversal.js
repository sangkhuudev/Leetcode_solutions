/**
 * Definition for a binary tree TreeNode.
 * function TreeTreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
// Root of Binary Tree
    let root = null;
    root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
function preorderTraversal(root) {
    if(!root) return [] ;
    let res =[] ;
    const traversal = node => {
        if(node) {
            res.push(node.val);
            traversal(node.left);
            traversal(node.right)
        }
    }
    traversal(root);
    return res
}
// 2: Iterative method
function preorderTraversal2(root) {
    let res =[],
        stack = root ? [root] : [] ;
    if(!root)  return res;
    while ( stack.length ) {
        let current = stack.pop();
        res.push(current.val)
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left)
    }
    return res
}
console.log(preorderTraversal2(root))