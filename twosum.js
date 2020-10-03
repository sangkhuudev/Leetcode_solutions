const nums=[3,4,5,2];  // to compute 2 numbers in array set = target
 function twoSum(nums, target) {
     const result=[];
    for( let i=nums.length-1;i>0;i--){
        for( let j=0;j<i;j++){
            if(nums[i]+nums[j]=== target){
                result.push(j,i);
            }
        }
      
    }
    return result;
}
console.log(twoSum(nums,8));
console.log(twoSum(nums,6));
console.log(twoSum(nums,5));

