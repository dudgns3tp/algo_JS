var arr = [112, 1814, 121, 1481, 1184];

var sortArr = arr.map(word =>{
    return parseInt(word.toString().split('').sort().join(''));
})
const set = new Set();
for(item of sortArr){
    set.add(item)
}
console.log(set.size)
console.log(sortArr)
var result =[2,3,4,5]
arr = result;
console.log( arr)