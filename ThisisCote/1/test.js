let str = 'a';
str = str
    .toLowerCase() //1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.{2,}/g, '.') //3
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .substring(0, 15); // 4;

while (str.length < 3) {
    console.log(str.length);
    str = str.concat(str[str.length - 1]);
}
console.log(str);
