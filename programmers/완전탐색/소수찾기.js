function solution(numbers) {
    var answer = [];
    let result = numbers.split('').map((item) => parseInt(item));
    for (let i = 1; i <= numbers.length; i++) {
        answer.push(...permutation(result, i));
    }

    const values = answer.map((item) =>
        parseInt(item.reduce((acc, cur) => (acc += cur), ''))
    );
    const uniqueValues = [...new Set(values)];
    const primeNumbers = getPrimeNumber(Math.max(...uniqueValues));
    return uniqueValues.filter((value) => primeNumbers.includes(value)).length;
}

function permutation(arr, selectNumber) {
    const result = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const restArr = origin.filter((_, idx) => idx !== index);
        const permutationArr = permutation(restArr, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const combineFixer = permutationArr.map((value) => [fixed, ...value]);
        result.push(...combineFixer); // 배열 spread syntax로 모두다 push
    });
    return result;
}

function getPrimeNumber(n) {
    let arr = Array(n + 1)
        .fill(true)
        .fill(false, 0, 2);

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    return arr
        .map((value, idx) => {
            if (value) return idx;
        })
        .filter((item) => item);
}

console.log(solution('011'));
