/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s){
    let stack = [];
    const keys = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for(let item of s) {
        if(item in keys) stack.push(keys[item]);
        else{
            if(stack.length == 0 || stack.pop() !== item)
            return false
        }
    }
    return stack.length == 0
}
