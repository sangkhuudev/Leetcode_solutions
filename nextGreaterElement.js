/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2){
    return nums1.map(n=>{
        let found=nums2.indexOf(n);
        while(nums2[++found]<n);
        if(found>=nums2.length) found= -1;
        else found=nums2[found];
        return found
    })
}
