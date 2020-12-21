def solution(n):
    answer = ''
    for i in list(reversed(sorted(list(str(n))))) :
      answer += i
    return int(answer)

print(solution(34135))

def solution2(n):
  ls = list(str(n))
  ls.sort(reverse= True)
  return int("".join(ls))

print(solution2(34135))