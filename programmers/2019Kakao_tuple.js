function solution(s) {
    var answer = [];
    return answer;
}

var s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
s = s.substring(2,s.length-2);
const splitStr = s.split('},{');

console.log(splitStr);

var arr = [];
arr.push("1,2,3");
arr.push([2]);
arr.push([2,3]);
console.log(arr)
console.log(arr[2].length)