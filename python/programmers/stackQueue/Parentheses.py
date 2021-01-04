def solution(s):
    answer = True
    stack = []
    for i in list(s):
      if(i == '('):
        stack.append(i)
      else: 
        if len(stack) == 0:
          return False
        stack.pop()
    
    if len(stack) != 0: 
      return False

    return True

print(solution("(()("))