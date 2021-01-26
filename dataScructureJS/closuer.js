function makeAdder(x) {
  var y = 1;
  return function (z) {
    console.log(z);
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

for (var i = 0; i < 100; i++) {
  function call(j) {
    setTimeout(() => console.log(j), j * 10);
  }
  call(i);
}
