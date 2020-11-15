/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x,y){
    return (x^y).toString(2).split('').map(Number).reduce((a,b)=>a+b)
}
