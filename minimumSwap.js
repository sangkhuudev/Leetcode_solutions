/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
function minimumSwap(s1,s2){
    let steps = 0;
    let flag1 = 0;
    let flag2 = 0;
    for (let i = 0; i < s1.length; ++i) {
      if (s1[i] === s2[i]) continue;
      s1[i] === "x"
        ? ++flag1 === 2 && (++steps, flag1 = 0)
        : ++flag2 === 2 && (++steps, flag2 = 0);
    }
    return flag1 === flag2 ? steps + flag1 * 2 : -1;
}
