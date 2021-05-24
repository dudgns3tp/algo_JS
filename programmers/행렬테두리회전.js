function solution(rows, columns, queries) {
    const answer = [];

    let arr = Array.from(new Array(rows + 1), () =>
        new Array(columns + 1).fill(0)
    );

    // (0+1, 0+1) 부터 시작
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            arr[i][j] = (i - 1) * columns + j;
        }
    }

    for (let query = 0; query < queries.length; query++) {
        const [x1, y1, x2, y2] = queries[query];
        const list = [];
        //맨 위 직사각형 x행은 고정, y1이 y2전까지 증가
        for (let i = y1; i < y2; i++) list.push(arr[x1][i]);
        //오른쪽 직사각형 y행 고정, x1이 x2전까지 증가
        for (let i = x1; i < x2; i++) list.push(arr[i][y2]);
        //아래쪽 직사각형 x행 고정, y2가 y1 직전까지 증가
        for (let i = y2; i > y1; i--) list.push(arr[x2][i]);
        //왼쪽 직사각형 y2행 고정, x2가 x1 직전까지 접근
        for (let i = x2; i > x1; i--) list.push(arr[i][y1]);
        answer.push(Math.min(...list));
        list.unshift(list.pop());

        for (let i = y1; i < y2; i++) arr[x1][i] = list.shift();
        for (let i = x1; i < x2; i++) arr[i][y2] = list.shift();
        for (let i = y2; i > y1; i--) arr[x2][i] = list.shift();
        for (let i = x2; i > x1; i--) arr[i][y1] = list.shift();
    }

    return answer;
}

const arr = [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
];
console.log(solution(6, 6, arr));
