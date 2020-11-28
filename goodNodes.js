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
function goodNodes( root ){
    let count = 0;
    const DFS = (node,maxVal) =>{
        if(!node) return;
        if(node.val>= maxVal){
            count++;
            maxVal = node.val
        }
        DFS(node.left,maxVal);
        DFS(node.right,maxVal)
        
    }
    DFS(root,-Infinity);
    return count 
}
// using queue
function goodNodes2(root){
    let count = 0;
    let queue = [{node : root, maxVal : root.val}];
    while (queue.length > 0){
        let { node, maxVal} = queue.shift();
        if(node.val >= maxVal){
            maxVal = node.val;
            count++ ;
        }
        if(node.left) queue.push({node: node.left,maxVal});
        if(node.right) queue.push({node: node.right,maxVal})
    }
    return count
}