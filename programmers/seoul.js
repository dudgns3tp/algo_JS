function solution(seoul) {
    var answer = '';
    seoul.forEach((value, index)=>{
        if(value == "Kim")
            answer = '김서방은 '+index+' 에있다.'
    })
    
    return answer;
}
