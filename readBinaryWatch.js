/**
 * @param {number} num
 * @return {string[]}
 */
/*
Here are highlights of things I learned through the coding.

1.There are 10 bits, 1024 options, base case is well defined.
2.if (startBit == 10 || count == num)
The code to set ith bit to 1 is very short and concise, time | (1 << i)
3.Bit manipulation to get lowest six bits for minutes is easy to follow, time & 0x3f
4.Bit manipulation get get highest 4 bits for hour is easy to follow, (time >> 6) & 0xf; In order to keep only 4 bits from 7 to 10th, and operatio is taken, & 0xf.
I like to write a few words for bit manipulations:

1.Use or | and left shift << to set the ith bit to 1; time | (1 << i)
2.Use and & to get minutes, (time & 0x3f)
3.Use right shift and & to get hour, (time >> 6) & 0xf;
*/
// Implementing
function readBinaryWatch(num){
    const isValid = time =>{
        //   lowest six bits           highest 4 bits
        return (time & 0x3f) < 60 && ((time >> 6) & 0xf) < 12;
    }
    const print = time =>{
        let hour = (time >> 6) & 0xf ;
        let minute = time & 0x3f;
        let timeFormatted = hour + ':' + minute;
        if(minute < 10){
            timeFormatted = hour + ':0' + minute
        }
        return timeFormatted
    }
    const goOverAllBits = (res,time,startBit,count,num) =>{
        if( startBit == 10 || count == num){
            if(count == num && isValid(time)){
                res.push(print(time));
                return  res
            } 
        }
        for(let i= startBit ; i < 10;i++){
            //   turn on ith bit ;
            goOverAllBits(res,time | (1<<i),i+1,count+1,num)
        }
    }
    let result=[]
    goOverAllBits(result,0,0,0,num);
    return result
}
