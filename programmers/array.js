//  배열의 선언 실습
var server1 = ["최영훈", "박우영", 33, null, true];
var server2 = Array("김민지", "유가희", 13);
var server3 = new Array("선진", "홍민정", false, undefined);

console.log('server 1 :', server1);
console.log('server 2 : ', server2);
console.log('server 3 : ',server3);

//2. 배열의 추가 실습

server1.push(123);
server2[server2.length] = "서버2 마지막 인덱스에 넣기"
server3[23]  = "server3의 길이는 얼마일까요?";

console.log('server 1 :', server1);
console.log('server 2 : ', server2);
console.log('server 3 : ',server3,'   server3 의 길이는  : ', server3.length);

//3. 배열의 순회 실습

let str1 = 'server1에는"';
for(var item of server1){
    str1 += item+', ';
}
str1 += '"이 들어있네요 ~ ';
console.log(str1);

let str2 = 'server2 에는 "';
for( var item in server2){
    str2 += server2[item] + ', ';
    console.log(item)
}
str2 += '"이가 들어있네요 ~';
console.log(str2);

let str3 = 'server3에는 "';
server3.forEach(
    item => str3 +=item +', '
)
str3+= '"이(가) 들어있네요 ~';
console.log(str3);
var arr21 = [1,2,3,23,4,5];
arr21.sort((a,b)=>a-b)
console.log(arr21+' ----')
arr21= arr21.map(i=>{return i -1}).reverse()
console.log(arr21)
console.log('----');



[1,2,3,4,5].some(function(v) {
   console.log(v);
   return (v ==2);
});

const keyword = '';
const keyword2 = 'ke';

console.log(keyword == true)
console.log(keyword2 == true)
let score = 0
score += keyword !== '' ? 0 : 1

console.log(score)