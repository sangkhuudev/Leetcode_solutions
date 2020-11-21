/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root){
    if(!root) return [];
    let queue = [root];
    let res =[]
    while(queue.length>0){
        let length = queue.length;
        let current =[]
        for(let i=0;i<length;i++){
            const {val,children} = queue.shift();
            current.push(val)
            children.map((child)=>queue.push(child))
        }
        res.push(current)
    }
    return res
}