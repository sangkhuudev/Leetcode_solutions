/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums,n){
    let res=[];
    let i=0,j=0;
    let nums2=nums.splice(n)
    while(i<n){
        res.push(nums[i],nums2[i]);
        i++
    }
    return res
}
