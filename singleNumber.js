/**
 * @param {number[]} nums
 * @return {number}
 */
// ver 1
function singleNum(nums){
    nums.sort((a,b)=>a-b);
    let i=0;
    if(nums.length==1) return nums[0];
    else if(nums[0]<nums[1] && nums[1]==nums[2]) return nums[0]
    else if(nums[nums.length-1]>nums[nums.length-2] &&nums[nums.length-2]==nums[nums.length-3]) return nums[nums.length-1]
    else{
    while(i<nums.length+2){
        if(nums[i]<nums[i+1] && nums[i+1]<nums[i+2]) return nums[i+1]
        else i++
    }
}

}
// ver 2
function singleNum2(nums){
    let set= new Set();
    let sumOfSet=0;
    let sumOfArr=0;
    for(let element of nums){
        if(!set.has(element)){
            set.add(element)
            sumOfSet+=element;
        }
      sumOfArr+=element;
    }
    return 2*sumOfSet-sumOfArr
}
