function solution(name_list) {
    let answer = false;
    let arrSize = name_list.length - 1;
    for(let i = 0; i<=arrSize; i++){
        for(let j = 0; j<=arrSize; j++){
            if(i === j){
                continue;                
            }else{
                if(name_list[j].indexOf(name_list[i]) === 0){
                    answer = true;
                }
            }
        }
    }
    return answer;
}

var name_list = ["너골너","너굴너","여울","서울"]
console.log(solution(name_list));