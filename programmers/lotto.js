function solution(lottos, win_nums) {
    var answer = [];
    let lottoNum = lottos.filter((number) => number !== 0);
    let unknown = Array.from(new Array(lottos.length - lottoNum.length)).fill(
        0
    );
    answer = lottoNum.filter((number) => win_nums.includes(number));
    return [getRank(answer.length + unknown.length), getRank(answer.length)];

    function getRank(value) {
        const rank = [6, 6, 5, 4, 3, 2, 1];
        return rank[value];
    }
}

console.log(solution([0, 0, 0, 0, 1, 2], [1, 2, 3, 4, 5, 6]));
