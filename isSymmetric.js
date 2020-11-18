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
function TreeNode( val,left,right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right==undefined ? null : right);
}
function isSymmetric(root){
    if(!root) return true;
    const check = (L,R) =>{
        if( L == null || R== null) return L==R ;
        if(L.val != R.val) return false ;
        return check(L.left,R.right) && check(L.right,R.left)
    }
    return check(root.left,root.right)
}
function isSymmetric2(root){
    if(!root) return true;
    const euler = [] ;
    const check = node=>{
        if(node == null){
            euler.push(null);
            return;
        }
        euler.push(node.val);
        check(node.left);
        check(node.right);
        euler.push(node.val)    
    }
    check(root)
    for(let i=0;i<euler.length;i++){
        if(euler[i] !=  euler[euler.length-1-i]) return false
    }
    return true
}