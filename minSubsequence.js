/**
 * @param {number[]} nums
 * @return {number[]}
 */
function minSubsequence(nums){
    nums.sort((a,b)=>b-a);
    let sum=nums.reduce((acc,val)=>acc+val,0)
    let target=0;
    let res=[]
    for(let i=0;i<nums.length;i++){
        res.push(nums[i])
        target+=nums[i]
        if(2*target>sum) break
    }
    return res
}
