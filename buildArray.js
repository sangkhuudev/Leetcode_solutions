/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function buildArray(target,n){
    let stack=[];
    for(let i=0,j=1;i<target.length && j<= n; j++){
        if(target[i] == j){
            stack.push('Push');
            i++
        }
        else{
            stack.push('Push','Pop');
        }
    }
    return stack
}
