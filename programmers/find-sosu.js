let str = "1234";

var permArr = [], usedChars = [];
function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0)
      permArr[permArr.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

const result = permute(str).sort();
console.log(result);
const removedDuplicationNumbers = function (arr) {
  const result =arr.sort().filter((item, index) => {
    if(item !== arr[index+1]){
      return item;
    }
  });
  return parsingToNumbers(result);
}

const parsingToNumbers = function (arr) {
  const result = arr.map(item => Number.parseInt(item));
  return result;
}

const numbers = removedDuplicationNumbers(result);

console.log(numbers);