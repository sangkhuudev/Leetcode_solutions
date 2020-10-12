/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums){
    let sorted=[].concat(nums).sort((a,b)=>b-a)
     if(sorted[0]>=2*sorted[1]) return nums.indexOf(sorted[0]);
     else return -1
}
