/**
 * @param {number[]} arr
 * @return {number}
 */
const a=[1,4,2,5,3]
// ver 1 : my solution
function sumOddLengthSubarrays(arr){
   let totalSum=0;
   let oddSum=0;
   let oddLength=1;
   while(oddLength<=arr.length){
        for(let i=0;i+oddLength-1<arr.length;i++){
            oddSum=partialSum(arr,i,i+oddLength-1)
            totalSum=totalSum+oddSum;
        }
        oddLength+=2;
   }
   return totalSum
}
function partialSum(arr,start,end){
   let sum=0;
   for(let i=start;i<=end;i++) sum+=arr[i];
   return sum
}
// ver 2: using prefix sum 
function sumOddLengthSubarrays2(arr){
    let prefixSum=new Array(arr.length+1).fill(0);
    let sum=0
    for(let i=1;i<arr.length+1;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i-1]
    }
    for(let i=0;i<arr.length;i++){
        for(let j=1;i+j<=arr.length;j+=2){
            sum+=prefixSum[i+j]-prefixSum[i]
        }
    }
    return sum
}

