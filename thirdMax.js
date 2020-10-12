/**
 * @param {number[]} nums
 * @return {number}
 */
// ver 1
function thirdMax(nums){
    let hash=nums.reduce((acc,num)=>{
        acc[num]= acc[num]||0 +1;
        return acc
    },{});
    let res=Object.keys(hash);
    res.sort((a,b)=>b-a)
    return res.length>=3 ? res[2] : res[0]
}
// ver 2
function thirdMax2(nums){
    let set=new Set(nums);
    if(set.size<3) return Math.max(...set);
    for(let i=0;i<2;i++){
        set.delete(Math.max(...set))
    }
    return Math.max(...set)
}