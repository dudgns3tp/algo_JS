function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length != 0){
        var len = progresses.length;
        var answerLen = answer.length;
        var cnt = 0;
        for(var i =0; i< len; i++){
            progresses[i] += speeds[i];
        }
        for(var i =0; i< len; i++){
            if(progresses[0] >=100){
                answer[answerLen] = ++cnt;
                progresses.shift();
                speeds.shift();
            }
        }
    }
    return answer;
}
var progresses = [93,30,55];
var speeds = [1, 30, 5];
console.log(solution(progresses,speeds));

