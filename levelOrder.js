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
 * @return {number[][]}
 */
function levelOrder(root){
    if(!root) return [];
    const res = [];
    let queue = [root];
    while(queue.length>0){
        let length = queue.length;
        let current = [];
        for(let i=0; i<length; ++i){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right) ;
            current.push(node.val)
        }
        res.push(current)
    }
    return res
    
}