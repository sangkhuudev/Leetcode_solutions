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
// 1: recursive method
function postorderTraversal(root) {
    if(!root) return [];
    let res = [];
    const traversal = (node) => {
        if(node) {
    
            traversal(node.left);
            traversal(node.right);
            res.push(node.val);
        }
    }
    traversal(root)
    return res
}
console.log(postorderTraversal2(root))
// 2: iterative method
function postorderTraversal2(root) {
    let res =[];
        stack = root ? [root] : [];
    while(stack.length) {
        let current = stack.pop() ;
        res.unshift(current.val)
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
        
        
    }
    return res    
}