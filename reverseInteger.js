
function reverse(x){
    let lastNum=x;
    let lastDigit;
    let result=0;
    while(lastNum!=0){
      lastDigit=lastNum%(10); 
      result=result*10+lastDigit;
      lastNum=(lastNum-lastDigit)/(10);
    }
    // handle with overflow 32-bit signed integer
    return result > Math.pow(-2, 31) && result < (Math.pow(2, 31) - 1)
    ? result  : 0

}