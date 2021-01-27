import heapq
from collections import deque

def solution(reqs):
    answer, progress = [], 0
    task = [] # 대기 큐
    cnt = 0
    for index, req in enumerate(reqs): 
        reqs[index] = (-req[0], req, index+1) 

    reqs_queue = deque(reqs) # 요청 큐
    print(reqs_queue)
    heapq.heapify(task)
    while reqs_queue or task or progress:
        # 매 3초마다
        if cnt % 3 == 0 and reqs_queue:
            heapq.heappush(task, reqs_queue.popleft())
        # progress가 없으면 태스크 추가
        if not progress:
            progress = heapq.heappop(task)
            print(progress[1])
            print(task)
        # progress가 모두끝났으면
        if progress[1][1] == 0:
            answer.append(progress[2])
            progress = None
        else:
            progress[1][1] -= 1

        cnt +=1 

    return answer

print(solution([[1, 7], [4, 1], [5, 2], [3, 1], [7, 2]]))