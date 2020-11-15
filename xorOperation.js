/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n,start){
    let nums= new Array(n).fill(0).map((val,index)=>start+2*index)
    return nums.reduce((acc,val,index)=>acc^nums[index+1],nums[0])
}
