/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums){
    if(nums.length==1) return 0;
    if(nums.length==2) return nums[0]>nums[1] ? 0 : 1;
    let i=0;
    while(nums[i]<nums[i+1] && i+1<nums.length) i++;
    return i
}

// ver 2
function findPeakElement2(nums){
    let low=0, high=nums.length-1;
    while(low<high){
        let mid= Math.floor((low+high)/2);
        nums[mid]>nums[mid+1] ? high = mid : low = mid+1
    }
    return low
}