/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function  kWeakestRows(mat,k){
     let resObj=[];
     let result=[];
     for(let i=0;i<mat.length;i++){
         let sum=0;
         for(let j=0;j<mat[0].length;j++){
             if(mat[i][j]==1) sum++;
             //else if(mat[i][j]==0) break
             else break
         }
         resObj.push({total :sum,index:i});
     }
     resObj.sort((a,b)=>a.total-b.total)
     for(let j=0;j<k;j++){
         result.push(resObj[j].index)
     }
     return result
}
