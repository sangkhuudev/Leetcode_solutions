/**
 * @param {number[]} nums
 * @return {number[]}    
 */                       
// ver 1
function findDisappearedNumbers(nums){
    let set = new Set(Array.from({length: nums.length}, (v,k) => k+1));
    for(let element of nums) {
        set.delete(element);
    }
    return [...set];
}
// ver 2: faster algorithm
function findDisappearedNumbers2(nums){
    let res=[]
    let hash=nums.reduce((acc,item)=>{
        acc[item]= acc[item]+1 || 1;
        return acc
    },{});
    for(let i=1;i<=nums.length;i++){
        if(hash[i]==undefined) res.push(i)
    }
    return res
}
