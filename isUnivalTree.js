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
// ver 1: USING BFS
function isUnivalTree(root) {
    if(!root) return true ;
    let queue = [root]
    let standard = root.val ;
    let compare = true
    while(queue.length > 0) {
        let length = queue.length ;
        for(let i= 0; i<length; ++i){
            let node = queue.shift() ;
            if(node.val !== standard){
                return false ;
            }
            if(node.left) queue.push(node.left) ;
            if(node.right) queue.push(node.right)
        }
    }
    return compare
}
// Ver 2 : Using DFS
function isUnivalTree2(root) {
    const isEqual = (node,value) => {
        if(!node) return true ;
        if (node.val == value) return isEqual(node.left,value) && isEqual(node.right , value)
        else return false
    }
    return isEqual(root,root.val)
}                                       