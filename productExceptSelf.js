/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums){
    let res=[]
    res[0]=1;
    for(let i=1;i<nums.length;i++){
         res[i]=res[i-1]*nums[i-1]
    }
    let rightProd=1
    for(let i=nums.length-1;i>=0;i--){
        res[i]=res[i]*rightProd;
        rightProd=rightProd*nums[i]
    }
    return res
}  
