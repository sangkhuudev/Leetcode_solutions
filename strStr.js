function strStr(haystack, needle) {
    let length = needle.length ;
    if(length == 0 || haystack == needle) return 0;
    if(length > haystack.length) return -1;
    let j = length - 1 ;
    for(let i = 0; i <= haystack.length - length; i++) {
        let str = haystack.slice(i,j+1);
        console.log(str)
        if(str == needle) return i;
        j++
    }
    return -1;
}
const haystack = "abcdef", needle = "babcd";
console.log(strStr(haystack, needle));

