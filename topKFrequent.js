function topKFrequent(nums,k) {
    let result = [] ;
    const hash = nums.reduce((acc,item) => {
        acc[item] = acc[item] + 1 || 1 ;
        return acc
    },{});
    
    let sorted = Object.entries(hash).sort(([key1,val1],[key2,val2]) => val2 - val1);
    for (let i = 0;i < k;i++) {
        result.push(parseInt(sorted[i][0]))
    }
    return result
}
