def solution(n):
    answer = []
    sum = 0
    while n >= 3:
      answer.insert(0, n % 3)
      n //= 3
    answer.insert(0, n)
    for i in range(len(answer)): 
      sum += answer[i] * 3 ** (i)
    return sum


print(solution(125))