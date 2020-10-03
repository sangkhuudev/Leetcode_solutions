const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const n =parseInt(line, 10);
    

    let arr1=[];
    let arr2=[];
    let m=0;
  
    let count = 0;

    rl.on('line', (line)=> {
        if(count==0){
           const a=line.toString().split(' ').map(Number);
           arr1=a;
        }
        else if(count==1){
            const second=parseInt(line, 10);
             m=second
        }
        else if(count==2){
            const b=line.toString().split(' ').map(Number);
            arr2=b;
        }

        if(++count>=3) {
            console.log(LCS(arr1,arr2))
          // process.exit();
        }
    
    });
});

function LCS(arr1,arr2){
    let rowLength=arr1.length+1;
    let colLength=arr2.length+1
    let Matrix=[]
    // to create matrix  rowLength * colLength 
    for(let i=0;i<rowLength;i++){
        Matrix[i]=[];
        for(let j=0;j<colLength;j++){
            Matrix[i][j]=undefined
        }
    }
    for(let i=0;i<rowLength;i++){
        for(let j=0;j<colLength;j++){
            if(i==0){
                Matrix[i][j]=0;
            }
            else if(j==0){
                Matrix[i][j]=0;
            }
        }  
    }  // finished matrix rowLength * colLength 

    for(let i=1;i<rowLength;i++){
        for(let j=1;j<colLength;j++){

          
            if(arr1[i-1]==arr2[j-1]){
                Matrix[i][j]=Matrix[i-1][j-1]+1;
            
            }
            else{
                Matrix[i][j]=Math.max(Matrix[i-1][j],Matrix[i][j-1])
            }
            
        }
    }
    return Matrix[arr1.length][arr2.length]
}
