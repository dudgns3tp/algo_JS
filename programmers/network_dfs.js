function solution(n, computers) {
    var answer = 0;

    const check = [];
    for(const computer of computers ){
        check.push(false)
    }

    function DFS(index){
        check[index] = true;

        for(let i = 0; i < computers.length; i++) {
            if(computers[index][i] === 1 && !check[i]){
                DFS(i)
            }
        }
    }

    for(let i = 0; i <computers.length; i++){
        if(!check[i]){
            DFS(i);
            answer+=1;
        }
    }
    return answer;
}
console.log(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
