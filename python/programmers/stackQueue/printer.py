def solution(priorities, location):
    piList = [(p, i) for (i, p) in enumerate(priorities)]
    print(piList)

    while piList :
      pi = piList.pop(0)
      priority = pi[0]
      priorityList = [priority for priority, index in piList]
      if priorityList : 
        maxPriority = max(priorityList)
      

    answer = 0
    return answer

print(solution([2, 1, 3, 2], 2))