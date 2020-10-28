/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function minDominoRotations(A,B){
    let arrA = new Array(7).fill(0);
    let arrB = new Array(7).fill(0);
    let same = new Array(7).fill(0);

    for(let i=0;i<A.length;i++){
        arrA[A[i]]++;
        arrB[B[i]]++;
        if(A[i]==B[i]) same[A[i]]++
    }
    for(let j=1;j<7;j++){
        if(arrA[j]+arrB[j]-same[j]==A.length) return Math.min(arrA[j]-same[j],arrB[j]-same[j])
    }
    return -1
}
 
