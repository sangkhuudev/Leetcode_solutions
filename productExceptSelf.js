/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums){
   let leftProd=[],rightProd=[];
   let res=[]
   leftProd[0]=1;
   for(let i=1;i<nums.length;i++){
        leftProd[i]=leftProd[i-1]*nums[i-1]
   }
   rightProd[nums.length-1]=1;
   for(let i=nums.length-2;i>=0;i--){
       rightProd[i]=rightProd[i+1]*nums[i+1]
   }
   for(let i=0;i<nums.length;i++){
       res[i]=leftProd[i]*rightProd[i]
   }
   return res
}  
