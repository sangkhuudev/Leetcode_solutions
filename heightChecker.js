/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights){
     return [...heights] .sort((a,b)=>a-b).filter((val,index)=>val!=heights[index]).length
}
