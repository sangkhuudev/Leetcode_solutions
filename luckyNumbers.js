/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function  luckyNumbers(matrix){
      let res=[];
      for(let i=0;i<matrix.length;i++){
          let minRow=Math.min(...matrix[i]);
          let position=matrix[i].indexOf(minRow);
          for(let k=0;k<matrix.length;k++){
            if(minRow<matrix[k][position]) break;
            if(k==matrix.length-1 && minRow>=matrix[k][position]) res.push(minRow)
          }
         
      }
     return res
}

