/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
function findOcurrences (text, first, second) {
    let third = [];
    let str = text.split(' ');
    let i = 0;
    while( i<str.length) {
        let index = str.indexOf(first,i)
        if (index == -1 || index +2 >=str.length) break
        if(str[index+1] == second ) third.push(str[index+2])
        i= index+1
    }
    return third
}
