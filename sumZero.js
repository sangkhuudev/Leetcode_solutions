/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n){
    let res=[];
    if(n%2!=0) res.push(0);
    for(let i=Math.floor(n/2);i>0;i--){
        res.push(-i-1);
        res.unshift(i+1)
    }
    return res
}