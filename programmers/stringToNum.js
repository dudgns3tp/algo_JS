function solution(s) {
    var answer = 0;
    var start = (s.substring(0, 1) == '+' || s.substring(0, 1) == '-') ? s.substring(0, 1) : null;
    if (start == null) { //start가 부호가아니면
        answer = parseInt(s)
    } else if (start == '+') {
        answer = parseInt(s);
    } else if (start == '-') {
        answer = parseInt(s);
    }
    return answer;
}
