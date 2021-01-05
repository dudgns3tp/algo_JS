# 우선순위 
# 1. 맨 앞자리 수가 가장 큰 수 뽑아서 제거
# 1-1 자리수가 하나인경우 비교 후 큰수 제거
# 1-2 자리수가 2개 이상일때는 n의자리로 비교 후 큰수 제거

def solution(numbers):
    answer = []
    for i, n in enumerate(numbers):
      
    print(numbers)
    return True

print(solution([6,10,2]))
"""
import itertools

def solution(numbers):
    answer = []
    permutationNumbers = list(itertools.permutations(numbers))
    for index, number in enumerate(permutationNumbers):
      answer.append('')
      for i , n in enumerate(permutationNumbers[index]):
        answer[index] += str(n)
    # answer = list(map(lambda x: int(x), answer))
    return max(answer)


print(solution([6,10,2]))
"""