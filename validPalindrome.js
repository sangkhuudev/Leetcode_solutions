/**
 * @param {string} s
 * @return {boolean}
 */
//ver 1
function isPalindrome(s){
   let alphaNum= s.toLowerCase().replace(/[^A-Z^a-z^0-9]/g,'');
   for(let i=0;i<alphaNum.length/2;i++){
       let prefix=alphaNum[i];
       let suffix=alphaNum[alphaNum.length-1-i];
       if(prefix!==suffix) return false
   }
   return true
}    
// ver 2
function isPalindrome2(s){
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;
    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}