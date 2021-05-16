# 주어진 수를 M번 더하여 가장 큰 수를 만드는 법칙
# 배열의 크기 N, 숫자가 더해지는 횟수 M , 연속해셔 연산하면 안되는 횟수 K
n, m, k = map(int, input().split())
dataList = list(reversed(sorted(map(int, input().split()))))

first = dataList[0]
second = dataList[1]
count = 0
result = 0

for data in dataList:
    result += first
