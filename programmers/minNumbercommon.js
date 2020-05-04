var arr = [2, 6, 8, 14,83];

function solution(arr) {
    var origin = Math.max.apply(null, arr);
    var mul = 1;
    arr.splice(arr.indexOf(max), 1)
    var len = arr.length;
    var max = origin

    while (true) {
        var cnt = 0
        // max 값이 arr의 모든 원소와 나눌떄 나머지기 0인것들
        arr.forEach(value => {
            if (max % value == 0) {
                cnt++;
            }
        })
        if (cnt == len)
            break;
        max = origin * mul++;
    }
    return max;
}
console.log(solution(arr))