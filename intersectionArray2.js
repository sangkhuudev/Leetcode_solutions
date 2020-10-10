/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// ver 1
function intersection(nums1,nums2){
 
  let hash=new Map();
  const res=[];
  for(let element of nums1){
      hash.set(element,1+hash.get(element)||1)
  }
  console.log(hash)
 for(let element of nums2){
     if(hash.get(element)){
     res.push(element)
     hash.set(element,hash.get(element)-1)
     console.log(hash)
 }
}
 return res
}
// ver 2 : great use of reduce
function intersection2(nums1,nums2){
    let res=[];
    if(nums1.length<nums2.length) return intersection2(nums2,nums1);
    let hash=nums1.reduce((acc,num)=>{
        acc[num]=acc[num]+1 || 1;
        return acc
    },{})
    for(let element of nums2){
        if(hash[element]){
            res.push(element);
            hash[element]--
        }
    }
    return res
}
