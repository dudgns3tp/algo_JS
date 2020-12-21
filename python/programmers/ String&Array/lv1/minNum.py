def solution(arr): 
    min = 99999999
    answer = []
    if len(arr) == 1 :
      answer.append(-1)
    else :
      for i in arr :
        if i < min : 
          min = i
      answer = list(filter(lambda x: x !=min, arr))
    return answer

def solution2(arr): 
  return [i for i in arr if i > min(arr)]


print(solution2([4, 9, 1, 2]))