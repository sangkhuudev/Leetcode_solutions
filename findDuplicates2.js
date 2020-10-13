/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicates(nums){
    let hash=nums.reduce((acc,num)=>{
        acc[num]=acc[num] +1|| 1 ;
        return acc
    },{});

    for(let i=1 ;i<=nums.length-1;i++){
        if(hash[i]>1) return i
    }
}    
