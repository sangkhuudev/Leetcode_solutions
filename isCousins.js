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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function TreeNode( val,left,right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right==undefined ? null : right);
}

function isCousins( root,x,y){
    if(root == null) return false;
    let queue = [root];
    while(queue.length>0){
        let length = queue.length;
        let foundX=false,foundY=false;
        for(let i=0;i<length;i++){
            const node = queue.shift();
            if(node.left && node.right){
                if((node.left.val==x && node.right.val == y) || (node.left.val == y && node.right.val == x))
                return false;
            }
            if(node.val == x) foundX = true ;
            if(node.val == y) foundY = true ;
            if(foundX && foundY) return true;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
    }
    return false
}