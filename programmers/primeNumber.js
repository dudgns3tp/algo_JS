function solution(numbers) {
    var primeNumber = [];
   //number로 만들수 있는 수들 찾기.

   //number 의 소수 찾기 ㅌ 

    for(let i = 1; i < 9999999 ; i++){
        let isPrime = true;
        for(let j =2; j<i; j++){
            if(i%j == 0){
                isPrime = false;
            }
        }

        if(isPrime){
            primeNumber.push(i)
        }
    }
    return primeNumber;
}

console.log(solution("1000"));
