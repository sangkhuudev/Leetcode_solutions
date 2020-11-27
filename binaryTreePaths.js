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
 * @return {string[]}
 */
function binaryTreePaths(root){
    let res = [];
    const DFS = (node,path) =>{
        if(!node) return ;
        path = path+node.val ;
        if(node.left == null && node.right == null){
            res.push(path);
            return
        }
        path+="->" ;
        if(node.left) DFS(node.left,path)
        if(node.right) DFS(node.right,path)
    }
    DFS(root,"");
    return res
}