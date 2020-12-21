def solution(n):
    answer = 0
    strList = list(str(n))
    for i in strList :
        answer += int(i)
    return answer

print(solution(123))
