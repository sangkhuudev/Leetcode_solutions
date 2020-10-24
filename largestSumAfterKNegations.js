/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations(A,K){
    let negatives=A.filter(val=>val<0).sort((a,b)=>a-b)
    let positives=A.filter(val=>val>=0).sort((a,b)=>a-b);
    let positiveSum=positives.reduce((acc,val)=>acc+val,0)
    if(negatives.length==0){   
     return K%2==1 ? positiveSum-2*positives[0] : positiveSum
    }
    count= K>negatives.length ? negatives.length : K
    for(let i=0;i<count;i++){
        negatives[i]=-negatives[i];
    }
    let negativeSum = negatives.reduce((acc,val)=>acc+val,0);
    return (K-count)%2==1 ? negativeSum+positiveSum-2*Math.min(negatives[negatives.length-1],positives[0]): negativeSum+positiveSum
}
