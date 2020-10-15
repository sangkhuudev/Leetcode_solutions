/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ver 1: using hashMap (pretty long)
function smallerNumbersThanCurrent(nums){
    let hashmap= new Map();
    let res=[]
    for(let item of nums) {
          if(hashmap.has(item)) hashmap.set(item,hashmap.get(item)+1);
          else hashmap.set(item,1)
    }
    for(let item of nums) {
       let count=0;
       for(let [key,value] of hashmap) {
           if(key<item) {
               count+=value;
              
           }   
       } 
       res.push(count)    
    }
    
    return res
    
}
// ver 2: simple solutions using sorted array
function smallerNumbersThanCurrent2(nums){
    let sortedArray=[].concat(nums).sort((a,b)=>a-b);
    let res=[]
    for(let i=0;i<sortedArray.length;i++){
         res.push(sortedArray.indexOf(nums[i]))
    }
    return res
}


