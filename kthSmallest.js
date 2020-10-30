/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix,k){
    var n=matrix.length;
    let low=matrix[0][0];
    let high = matrix[n-1][n-1];
    const counting = (matrix,x)=>{
        let count=0;
        let j;
        matrix.forEach((row)=>{
            for(j=0;j<n && row[j]<=x;j++){
                count+=1
            }
        });
        return count
    }
    while(low<high){
        let mid= Math.floor((high+low)/2);
        let count=counting(matrix,mid)
        if(count<k) low = mid+1;
        else high = mid;
    }
    return low
}
