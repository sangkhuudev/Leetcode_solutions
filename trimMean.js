/**
 * @param {number[]} arr
 * @return {number}
 */
function  trimMean(arr){
    let length=arr.length
    arr.sort((a,b)=>a-b);
    let index=Math.floor(length/20)
    let res=arr.splice(index,length-2*index);
    return res.reduce((acc,curr)=>acc+curr,0)/ res.length
}
