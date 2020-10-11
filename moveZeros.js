/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums){
    let i=0;
    let j=0;
    while(i+j<nums.length){
        if(nums[i]==0){
            nums.splice(i,1);
            nums.push(0);
            j++
        }
        else i++
    }
    return nums
}
