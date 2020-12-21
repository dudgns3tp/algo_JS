import collections

def solution(participant, completion) :
  p = collections.Counter(participant) 
  c = collections.Counter(completion)
  answer = p - c
  return list(answer.keys())[0]

participant = ["leo", "kiki", "kiki", "eden"]
completion = ["kiki", "leo", "eden"]

print(solution(participant, completion))