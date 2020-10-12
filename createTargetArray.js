/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const a=[3,5,7,6,8] 
let index=[0,1,1,3,2]
// return [3,7,8,5,6]
function createTargetArray(nums,index){
    let res=[]
    for(let i=0;i<index.length;i++){
        res.splice(index[i],0,nums[i])
    }
    return res
}    
console.log(createTargetArray(a,index))