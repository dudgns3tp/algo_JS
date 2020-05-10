function solution(numbers) {
    var answer = 0;
    var n = numbers.split('');
    console.log(n)
    var nums = new Set();
    permutation(n,'');

    function permutation(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s)) === false) {
                nums.add(Number(s))
                console.log(Number(s));
                if (chkPrime(Number(s))) {
                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (let i = 0; i < a.length; i++) {
                var t = a.slice(0) // [1,1] [1] [0]
                t.splice(i, 1); //  [0]
                console.log(t, s + a[i]); //[1,1]  0   // [1] 01 // [0] 110 // [1,1] 0 
                permutation(t, s + a[i]); //
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return answer;
}

var numbers = "011";
console.log(solution(numbers))