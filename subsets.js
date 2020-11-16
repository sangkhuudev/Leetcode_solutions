/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// ver 1: 
function subsets(nums){
    let set=new Set()
    set.add([])
    for(let i=0;i<nums.length;i++){
        let subsets=[...set];
        subsets.forEach(subset=>{
            let newSubset=subset.slice(0);
            newSubset.push(nums[i]);
            set.add(newSubset)
        }); 
    }
    return [...set]
}
// ver 2 : using DFS
function subsets2(nums){
    let res=[]
    DFS([],0);
    function DFS(current,index){
        res.push(current);
        for(let i=index;i<nums.length;i++){
            DFS(current.concat(nums[i]),i+1)
        }
    }
    return res
}
// ver 3: using bit manipulation
function subsets3(nums){
    let powerSet= [];
    for(let i=0; i< (1<<nums.length); ++i){
        let subset = []
        for(let j=0;j< nums.length;++j){
            if( i &(1<<j)) subset.push(nums[j])
        }
        powerSet.push(subset)
    }
    return powerSet
}
