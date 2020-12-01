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
function countNodes (root){
    if(!root) return 0;
    let queue = [root];
    let res = 0 ;
    while(queue.length > 0) {
        let length = queue.length ;
        for( let i =0 ; i< length ; ++i){
            let node = queue.shift();
            res++;
            if(node.left) queue.push(node.left) ;
            if(node.right) queue.push(node.right)
        }
    }
    return res
}
// ver 2  :
function countNodes2(root){
    return !root ? 0 : 1+ countNodes2(root.left) + countNodes2(root.right)
}