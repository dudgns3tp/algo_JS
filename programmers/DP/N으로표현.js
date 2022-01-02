function solution(N, number) {
  const memo = Array.from(new Array(9), () => new Set());
  if (N === number) {
    return 1;
  } else {
    memo.forEach((item, index) => {
      if (index !== 0) item.add(Number(String(N).repeat(index)));
    });
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j < i; j++) {
        for (let item1 of memo[j]) {
          for (let item2 of memo[i - j]) {
            memo[i].add(item1 + item2);
            memo[i].add(item1 - item2);
            memo[i].add(item1 * item2);
            memo[i].add(Math.floor(item1 / item2));
          }
        }
      }
      if (memo[i].has(number)) {
        console.log('memo', memo[i]);
        console.log('number: ', number);
        return i;
      }
    }
    return -1;
  }
}
console.log(solution(5, 12));
