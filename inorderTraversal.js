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
 * @return {number[]}
 */
    function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
// Method 1: Recursive
function inorderTraversal(root) {
    if(!root) return [] ;
    let res = [] ;
    const traverse = (node) => {
        if(node) {
            traverse(node.left) ;
            res.push(node.val) ;
            traverse(node.right)
        }
    }
    traverse(root) ;
    return res
}
//Method 2: Iterative 
const root = new TreeNode(1);
const l = new TreeNode(3);
const r = new TreeNode(2);
root.right = r;
r.left = l;
console.log(inorderTraversal2(root));

/**
   * The goal is to maintain a stack of nodes to visit as we traverse 
   * down the tree. As we traverse down, We go left and push all the 
   * left nodes first in the stack. Once we reach to the bottom, we 
   * store the node value and traverse right.
   *           1
   *         /   \
   *        2     3    preorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
   *       / \   /     (left -> root -> right)
   *      4   5 6
   */
function inorderTraversal2(root) {
    let res = [] ,
        stack = [];
    if(!root) return res ;
    let current = root ;
    while( current || stack.length )  {
        if(current) {
            stack.push(current);
            current = current.left
        }
        else {
            current = stack.pop();
            res.push(current.val);
            current = current.right
        }
    }
    return res     
}