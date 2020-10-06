
function removeDuplicates(nums){
    let i=0,j=1;
   if(nums[0]==nums[nums.length-1]) return [nums[0]];
    while(nums.length>0&& i<nums.length){
        
        if(nums[i]==nums[j]){
            nums.splice(j,1)
            
        }
        else{
            i++;
            j++
        }
    }
    return nums
}
