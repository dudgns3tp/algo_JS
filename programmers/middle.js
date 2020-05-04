function solution(str) {
    var answer = '';
    let len = str.length;
    let halfLen = parseInt(len/2);
    answer = len%2==0 ? str.slice(halfLen-1,halfLen+1) : str.slice(halfLen,halfLen+1)
    return answer;
}
console.log(solution('abcdef'));

