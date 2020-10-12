/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ver 1
function findDuplicates(nums){
    let hash=nums.reduce((acc,item)=>{
        acc[item]= acc[item]+1 || 1;
        return acc
    },{});
    let res=new Set()
    for(let element of nums){
        if(hash[element]==2) res.add(element)
    }
    return [...res]
}
// ver 2
function findDuplicates2(nums){
    const set = new Set(nums);
    nums.forEach(n => {
        if (set.has(n)) {
            set.delete(n);
        } else {
            set.add(n);
        }
    })
    return Array.from(set);
}