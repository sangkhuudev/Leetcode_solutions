/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
function addToArrayForm(A,K){
    const string = A.join('');
    const number = BigInt(string) + BigInt(K);
    return Array.from((number).toString());
}
