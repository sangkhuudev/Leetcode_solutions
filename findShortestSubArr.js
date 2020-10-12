/**
 * @param {number[]} nums
 * @return {number}
 */
function findShortestSubArray(nums){
    let countHash={};
    let firstIndexes={};
    let lastIndexes={};
    let max=0;
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        countHash[num]= (countHash[num]||0) +1;
        max=Math.max(countHash[num],max);
        if(firstIndexes[num]==undefined) firstIndexes[num]=i;
        lastIndexes[num]=i
    }
    let res=nums.length
    for(let element in countHash){
        if(countHash[element]===max) res=Math.min(res,lastIndexes[element]-firstIndexes[element]+1)
    }
    return res
}

