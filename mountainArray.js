/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A){
     if(A.length<3) return false;
     let i=0;
     let j=A.length-1;
     while(A[i]<A[i+1]&& i+1<A.length-1) i++;
     while(A[j]<A[j-1]&& j>1) j--;
     if(i==j) return true
     else return false
}
