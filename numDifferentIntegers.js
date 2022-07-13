function numDifferentIntegers(word) {
    const nums = word.split(/[^0-9]+/);
    const char0 = '0'.charCodeAt(0);
    let numSet = new Set();
    for(let num of nums) {
        if(num.length > 0) {
            let i = 0;
            while(num.charCodeAt(i) == char0) i++;
            numSet.add(num.slice(i) || '0')
        }

    }
    return numSet.size
}


const word = "a123bc34d8ef034d0";
console.log(numDifferentIntegers2(word))

// version 2 

function numDifferentIntegers2(word) {
    let nums = word.match(/\d+/g);

    return nums ? (new Set(nums.map((num) => num.replace(/^0+/, '')))).size : 0


}