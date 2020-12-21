def solution(n):
  answer = 0
  arr = []
  for i in range(n//2) :
    if n % (i+1) == 0 :
      arr.append(i+1)
      arr.append(n//(i+1))
  
  return sum(list(set(arr)))

print(solution(1))