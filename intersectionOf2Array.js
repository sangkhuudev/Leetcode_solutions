/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const a=[1,2,3,2,5]
const b=[1,2,4,6,5]
function intersection(nums1,nums2){
    let set=new Set(nums1)
    return [...new Set(nums2.filter((n)=> set.has(n)))]
}
console.log(intersection(a,b))