def solution(n):
    answer = 0
    for i in range(n) :
      if ((i+1) == 2) | ((i+1) == 3) | ((i+1) == 5) | ((i+1) == 7) :
        print(i+1)
        answer +=1
      elif ((i+1) % 2 == 0) | ((i+1) % 3 == 0) | ((i+1) % 5 == 0) | ((i+1) % 7 == 0) | (i+1 == 1) :
        pass
      else :
        print(i+1)
        answer +=1
    return answer

print(solution(11))