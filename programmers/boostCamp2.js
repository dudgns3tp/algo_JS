let arr1 = [1, 2, 3, 2];
let arr2 = [1, 3];
let diff = arr1.filter(x=> arr2.includes(x));
let result = [...arr1, ...arr2];
let result2 =result.filter((it, idx) => result.indexOf(it) === idx);
let a = [];
let complement = arr1.filter(x=> !arr2.includes(x));
console.log(complement);