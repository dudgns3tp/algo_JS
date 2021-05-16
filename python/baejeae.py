# 소수를 판별하는 함수 isPrime(n)를 만들고 이를 이용해 1부터 500까지
# 모든 소수를 출력하는 프로그램
import math


def isPrime(num):
    if num == 1:
        return False

    if num == 3:
        return True

    for k in range(2, int(math.sqrt(num))+1):
        if num % k == 0:
            return False
        return True


for num in range(1, 501):
    if isPrime(num):
        print(num)
