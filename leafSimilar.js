/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2){
    const traverse = (node,res) =>{
        if(!node) return;
        if(node.left == null && node.right == null) res.push(node.val)
        traverse(node.left,res);
        traverse(node.right,res);
    }
    let leaf1 = []
    let leaf2 = [];
    traverse(root1,leaf1);
    traverse(root2,leaf2)
    if(leaf1.length !== leaf2.length) return false;
    else{
        for(let i=0;i<leaf2.length;i++){
            if(leaf1[i] !==leaf2[i]) return false;
        }
    }
    return true

}
