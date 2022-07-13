function sumOfUnique(nums) {
    let sum = 0;
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i],1 + (hash.get(nums[i]) || 0))
    }
    for(let key of hash.keys()) {
        if(hash.get(key) === 1) sum += key
    }
    return sum
}

const nums = [1,4,4,5,5,5,3,2,1,3,6,8];

console.log(sumOfUnique2(nums));

// version 2
function sumOfUnique2(nums) {
    let sum = 0;
    let hash= nums.reduce((acc,key) => {
        acc[key] = (acc[key] || 0 ) + 1;
        return acc;
    }, {});
    for(let key in hash) {
        if(hash[key] == 1) sum+=parseInt(key)
    }
    return sum
}