function solution(a, b) {
    var answer = 0;
    if(b<a)
        [a,b] = [b,a]
    for(var i =a; i <=b; i++){
        answer += i
    }
    return answer
}

console.log(solution(5,3));

