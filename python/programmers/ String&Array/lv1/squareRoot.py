import math
def solution(n):
    answer = math.sqrt(n)
    if answer % 1 == 0.0 :
      return answer = int(math.pow(answer+1, 2))
    return -1

print(solution(3))

def solution2(n) :
  answer = n ** (1/2)
  if answer % 1  == 0 :
    return int((answer+1) ** 2)
  return -1

print(solution2(121))