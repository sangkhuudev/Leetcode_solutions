/**
 * @param {number[]} nums
 * @return {number}
 */
// ver 1
function specialArray(nums){
    let x=0;
  while (x<=nums.length){
      let num=nums.filter((val)=>val>=x).length;
      console.log(num);
      if(x==num) return x;
      x++;
  }
  return -1
}
// ver 2
function specialArray2(nums){
    nums.sort((a,b)=>a-b);
    for(let i=1,j=0;i<=nums.length;i++){
        while(nums[j]<i) j++;
        if(i==nums.length-j) return i
    }
    return -1
}