/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr){
  let ranks=[...new Set(arr)].sort((a,b)=>a-b).reduce((acc,cur,index)=>acc.set(cur,index+1),new Map())
  return arr.map(item=>ranks.get(item))
  
}
