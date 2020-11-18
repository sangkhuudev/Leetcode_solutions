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
function TreeNode( val,left,right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right==undefined ? null : right);
}
function levelOrderBottom( root) {
    if( !root) return [];
    let res = [];
    let queue= [root];
    while(queue.length > 0){
        let length = queue.length;
        let current = [] ;
        
        for(let i=0; i < length ; ++i){
            let head = queue.shift();
            current.push(head.val)
            if(head.left !== null) queue.push(head.left);
            if(head.right !== null) queue.push(head.right)
        }
        res.unshift(current)
    }
    return res
}

