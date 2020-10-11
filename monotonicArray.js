/**
 * @param {number[]} A
 * @return {boolean}
 */
const a=[1,2,2,3,7,5];
const b=[2,2,2,1,4,6]
const c=[5,4,2,3,1]
function isMonotonic(A){
    let positive=0;
    let negative=A.length-1
     for(let i=0;i<A.length-1;i++){
       if(A[i]<A[i+1]){
          positive++
       }
       else if(A[i]==A[i+1]){
          negative--;
          positive++
       }
       else negative--
     }
     return positive==A.length-1 || negative==0 ? true : false
}
console.log(isMonotonic(c))