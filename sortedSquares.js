/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map((num)=> num**2).sort((a,b)=>a-b)
};