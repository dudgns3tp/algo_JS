function solution(heights) {
    var result = [];
    while (heights.length != 0) {
        var temp = [];
        let len = heights.length;
        for (let i = 0; i < len; i++) {
            var tempValue = heights.pop();
            temp.push(tempValue);
            if (temp[0] < heights[heights.length - 1]) {
                result.push(heights.length);
                temp.shift();
                while (temp.length != 0) {
                    heights.push(temp.pop());
                }
                break;
            } else if (heights.length == 0 && temp.length >= 1) {
                result.push(0);
                temp.shift();
                while (temp.length != 0) {
                    heights.push(temp.pop());
                }
                break;
            }
        }
    }
    return result.reverse();
}

var heights = [1, 5, 3, 6, 7, 6, 5]

console.log(solution(heights));