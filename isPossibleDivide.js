/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function isPossibleDivide(nums,k){
    if(nums.length %k !=0) return false;
    let map=new Map();
    nums.sort((a,b)=>a-b)
    for(let item of nums) {
        map.set(item,(map.get(item)||0)+1)
    }
    for(let [key,value] of map){
        if(value==0) continue;
        for(let i=0;i<k;i++){
            let [num,count]=[key+i,map.get(key+i)];
            if(value>count || !count) return false;
            map.set(num,map.get(num)-value)
        }
    }
    return true
}
