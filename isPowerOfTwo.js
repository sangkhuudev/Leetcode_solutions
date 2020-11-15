/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n){
    if(n < 1) return false;
    return (n&(n-1))  == 0
}
