function solution(board, moves) {
    var answer = 0;
    var catchCrane =[null];
    moves.forEach((i)=>{
        for(var j=0 ; j<board.length; j++){
            if(board[j][i-1] != 0){
                console.log("잡았다 요놈!: "+board[j][i-1])
                catchCrane.push(board[j][i-1]);
                board[j][i-1] = 0;
                answer = result(catchCrane, answer);
                break;
            }
        }
    })
    return answer;
}
var board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
var moves = [1,5,3,5,1,2,1,4];
console.log(solution(board,moves))

function result(arr, cnt){
    let last = arr[arr.length-1];
    let last2 = arr[arr.length-2];
    if(last == last2){
        arr.pop();
        arr.pop();
        cnt+=2;
    }
    return cnt;
}



// console.log(cnt);
// var cnt = 0;
// var catchCrane =[null];
// moves.forEach((i)=>{
//     for(var j=0 ; j<board.length; j++){
//         if(board[j][i-1] != 0){
//             console.log("잡았다 요놈!: "+board[j][i-1])
//             catchCrane.push(board[j][i-1]);
//             board[j][i-1] = 0;
//             result(catchCrane);
//             break;
//         }
//     }
// })
// function result(arr){
//     let last = arr[arr.length-1];
//     let last2 = arr[arr.length-2];
//     if(last == last2){
//         arr.pop();
//         arr.pop();
//         cnt+=2;
//     }
// }
// console.log(cnt);
// // 크레인 집는 로직
// // let last = stack[stack.length-1];
// // stack.push(1);
// // let recently = stack[stack.length-1];
// // if(last==recently){
// //     stack.pop();
// //     stack.pop();
// //     cnt +=2;
// // }
// // console.log(stack);



