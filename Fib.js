/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    const Fib = [0,1];
    
   for( let i=2; i<N+1;i++){
       Fib[i]= Fib[i-1]+Fib[i-2];
       Fib.push();
   }
   return Fib[N];
};