/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// ver 1
function findKthPositive(arr,k){
    let maxNum=arr[arr.length-1]
    let missingNum=[];
    let setNum=new Set(arr)
    for(let i=1;i<=maxNum;i++){
        setNum.has(i) ? missingNum : missingNum.push(i)
    }
    return missingNum[k-1] ? missingNum[k-1] : maxNum +k-missingNum.length
}
// ver 2
function findKthPositive2(arr,k){
    let missingNum=0
    for(let i=1;;i++) {
         if (!arr.includes(i)) missingNum++
         if (k==missingNum) return i
     }
}