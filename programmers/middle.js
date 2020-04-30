function solution(str) {
    var answer = '';
    let len = str.length;
    let halfLen = parseInt(len/2);
    answer = len%2==0 ? str.slice(halfLen-1,halfLen+1) : str.slice(halfLen,halfLen+1)
    return answer;
}
console.log(solution('abcdef'));
var str = "abcdef";
let strLen = parseInt(str.length/2);
console.log(strLen);
var str2 = str.slice(strLen-1,strLen+1);
console.log("str2:"+str2)

