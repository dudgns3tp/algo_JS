function solution(new_id) {
    let answer = new_id
        .toLocaleLowerCase() //1
        .replace(/[^\w-_.]/g, '') //2
        .replace(/\.{2,}/g, '.') //3
        .replace(/^\.|\.$/g, '') //4
        .replace(/^$/, 'a') //5
        .substring(0, 15)
        .replace(/\.$/, ''); // 6
    while (answer.length < 3) {
        answer = answer.concat(answer[answer.length - 1]);
    }
    return answer;
}
