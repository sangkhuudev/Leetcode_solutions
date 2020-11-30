/**
 * @param {number[]} nums
 * @return {number}
 */
// ver 1 : using hash
function singleNonDuplicate(nums){
    let hash = new Map();
    for(let item of nums) {
        hash.set(item, 1+(hash.get(item)||0))
    }
    for(let key of hash.keys()){
        if(hash.get(key) == 1) return key
    }
}

// ver 2 : binary search
function singleNonDuplicate2(nums){
    const search = (low,high) =>{
        if( high == low) return nums[low] ;
        let mid = Math.floor((low+high)/2);
        if(nums[mid] !==nums[mid+1] && nums[mid-1]!==nums[mid]) return nums[mid];
        else if(nums[mid] == nums[mid+1]){
            if((high-mid)%2 ==0) return search(mid,high);
            else return search(low,mid-1)
        }
        else {
            if((mid-low)%2 ==0) return search(low,mid);
            else return search(mid+1,high)
        }  
    }  
    return search(0,nums.length-1)
}
// ver 3: Using XOR
function singleNonDuplicate3(nums){
    return nums.reduce( (acc,val) => acc ^=val,0)
}