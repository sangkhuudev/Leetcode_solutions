function isPalindrome(x){
    let lastNum=x;
    let lastDigit;
    let result=0;
    if(x<0) return false;
    while(lastNum!=0){
      lastDigit=lastNum%(10); 
      result=result*10+lastDigit;
      lastNum=(lastNum-lastDigit)/(10);
    }
    if(result==x) return true;
    else return false
   
}
