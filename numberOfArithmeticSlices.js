/**
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices(A){
    if(A.length<3) return 0;
    let Dp=0;
    let sum=0;
    for(let i=2;i<A.length;i++){
        if(A[i]-A[i-1]== A[i-1]-A[i-2]){
            Dp+=1;
            sum+=Dp
        }
        else Dp=0;
        
    }
    return sum
}
