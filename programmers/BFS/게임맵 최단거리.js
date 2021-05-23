function solution(maps) {
    const Y_MAX_MAPS_VALUE = maps.length - 1;
    const X_MAX_MAPS_VALUE = maps[0].length - 1;
    return bfs([0, 0, 1], maps);

    function bfs(start, maps) {
        let result = -1;
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        let queue = [];
        queue.push(start);
        while (queue.length !== 0) {
            const [y, x, cnt] = queue.shift();
            maps[y][x] = 0;
            for (let i = 0; i < 4; i++) {
                const [ny, nx] = [y + dirs[i][1], x + dirs[i][0]];

                if (
                    ny == Y_MAX_MAPS_VALUE &&
                    nx == X_MAX_MAPS_VALUE &&
                    maps[Y_MAX_MAPS_VALUE][X_MAX_MAPS_VALUE] === 1
                ) {
                    result = cnt + 1;
                    return result;
                } else if (
                    0 <= ny &&
                    0 <= nx &&
                    nx <= X_MAX_MAPS_VALUE &&
                    ny <= Y_MAX_MAPS_VALUE &&
                    maps[ny][nx] === 1
                ) {
                    maps[ny][nx] = 0;
                    queue.push([ny, nx, cnt + 1]);
                }
            }
            dirs.forEach(([dy, dx]) => {});
        }
        return result;
    }
}

const testCase = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
];

// const testCase = [
//     [1, 0],
//     [0, 1],
// ];

console.log(solution(testCase));
