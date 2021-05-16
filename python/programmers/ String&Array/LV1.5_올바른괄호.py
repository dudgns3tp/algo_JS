def solution(s):
    answer = True
    stack = []
    for bracket in list(s):
      if(bracket == '('):
        stack.append(bracket)
      else: 
        if not stack:
          return False
        stack.pop()
    if stack: 
      return False
    return True

print(solution("(()("))