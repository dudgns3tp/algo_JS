const fs = require("fs")

//파일 읽어오기
let input = fs
  .readFileSync("./file/bird-drone.txt")
  .toString()
  .split("\n");

function solution(input) {
  let grid = [];
  let visits = [];
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  let birdsDrone = [0, 0];
  let result = [0, 0];

  let [r, c] = input[0].split(" "); // r, c 입력
  // map 초기화
  input.forEach((item, index) => {
    if (index !== 0) {
      grid[index - 1] = item.split('');
    }
  })

  // visits 초기화
  grid.forEach((item, index) => {
    visits[index] = item.map(it => false);
  })

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      dfs(grid, i, j, r, c, visits);
      fight(birdsDrone, result);
    }
  }
}

function fight(birdsDrone, result) {
  if (birdsDrone[0] == 0 && birdsDrone[1] == 0) {
    return;
  } else if (birdsDrone[0] >= birdsDrone[1]) {
    birdsDrone[1] = 0;
  } else if (birdsDrone[0] < birdsDrone[1]) {
    birdsDrone[0] = 0;
  }
  result[0] += birdsDrone[0];
  result[1] += birdsDrone[1];
}

function dfs(grid, x, y, r, c, visits) {
  if (x < 0 || y < 0 || x >= r || y >= c || grid[x][y] === '#' || visits[x][y] == true) {
    return;
  }

  visits[x][y] = true;
  if (grid[x][y] === 'v') {
    birdsDrone[0]++;
  } else if (grid[x][y] === 'o') {
    birdsDrone[1]++;
  }

  dirs.forEach(dir => {
    dfs(grid, x + dir[0], y + dir[1]);
  })

}

solution(input);