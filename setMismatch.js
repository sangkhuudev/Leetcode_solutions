/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNum(nums){
    let hash=nums.reduce((acc,num)=>{
        acc[num]=acc[num]+1 || 1;
        return acc
    },{});
    let sum=nums.reduce((acc,num)=>{return acc+num},0); 
    let checkSum=nums.length*(nums.length+1)/2
   for(let i=0;i<nums.length;i++){ 
        if(hash[nums[i]]!=1){
            return [nums[i],nums[i]-sum-checkSum];        
        }      
    }  
}

