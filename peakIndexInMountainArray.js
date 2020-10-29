/**
 * @param {number[]} arr
 * @return {number}
 */
function peakIndexInMountainArray(A){
    let i=0;
    let j=A.length-1;
    while(A[i]<A[i+1]&& i+1<A.length-1) i++;
    while(A[j]<A[j-1]&& j>1) j--;
    return i==j ? i : -1
}
