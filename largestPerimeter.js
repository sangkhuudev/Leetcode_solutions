/**
 * @param {number[]} A
 * @return {number}
 */
function largestPerimeter( A ) {
    A.sort((a,b) =>b-a);
    for(let i=0;i+2<A.length;i++){
        if(A[i+1]+A[i+2] > A[i]) return A[i+1]+A[i+2]+A[i];
    }
    return 0
}