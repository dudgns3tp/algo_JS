function solution(places) {
  const [P, O, X] = ['P', 'O', 'X'];
  const answer = places.map(place => {
    return place.some((row, rowIndex) => {
      return row.split('').some((column, index, arr) => {
        if (column === X) return false;
        const userCount = [
          arr[index - 1] || null, //좌
          arr[index + 1], //우
          (place[rowIndex - 1] || '').charAt(index), //상
          (place[rowIndex + 1] || '').charAt(index), //하
        ].filter(item => item === P).length;

        if ((column === P && userCount > 0) || (column === O && userCount >= 2)) return true;

        return false;
      });
    })
      ? 0
      : 1;
  });
  return answer;
}

const tc = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];
console.log(solution(tc));
