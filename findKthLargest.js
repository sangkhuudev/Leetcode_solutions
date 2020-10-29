/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums,k){
    return nums.sort((a,b)=>b-a)[k-1]
}