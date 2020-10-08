/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const a=[1,2,2,4,5,5,6]
const b=[1]
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
console.log(searchTarget(a,0,a.length-1,7))
console.log(searchTarget(b,0,b.length-1,0))
