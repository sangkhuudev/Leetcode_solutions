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
function averageOfLevels( root ) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while ( queue.length > 0) {
        let length = queue.length ;
        let sum = 0
        for( let i = 0; i<length; ++i) {
            let node = queue.shift() ;
            sum+=node.val ;
            if(node.left) queue.push(node.left) ;
            if(node.right) queue.push(node.right);
        }
        res.push(sum/length)
    }
    return res

}