/**
 * @param {number} num
 * @return {number[]}
 */
// ver 1
function countBits(num){
    let res = []
    const  countOne = num =>{
        let count=0;
        while (num != 0){
            num = num & (num-1);
            count++
        }
        return count
    }
    for (let i=0;i<=num;i++){
        res.push(countOne(i))
    }
    return res
}

// ver 2: using DP approach
function countBits2(num){
    let res = [0];
    for(let i = 1; i<= num ; ++i){
        let rightShift = i>>1 ;
        let lastDigit = i&1;
        res[i]= res[rightShift] + lastDigit
    }
    return res
}