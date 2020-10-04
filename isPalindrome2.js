function isPalindrome(x){
if(x<0 || (x%10==0 && x!=0)) return false;
let revertedNum=0;
while(x>revertedNum){
    revertedNum=revertedNum*10+x%10;
    x=Math.floor(x/10)
}

 return x==revertedNum || x== Math.floor(revertedNum/10)
}

// When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
// For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
 // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
 