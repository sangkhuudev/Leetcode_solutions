/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ver 1
function searchTarget(nums,low,high,target){
     if(high<low) return low;
     let mid=Math.floor(low+(high-low)/2);
    
     if(nums[mid]==target) return mid;
     else if(nums[mid]>target){
        return searchTarget(nums,low,mid-1,target)
     }
     else{
        return searchTarget(nums,mid+1,high,target)
     }
}
// ver 2 
function searchTarget2(nums,target){
    let i=0;
    while(nums[i]<target) i++;
    return i
}
