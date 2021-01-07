from collections import deque
def solution(progresses, speeds):
    TASK_COMPLETED = 100
    answer = []
    taskQueue = deque(progresses)
    speedQueue = deque(speeds)
    while taskQueue:
        cnt = 0

        for index, _ in enumerate(taskQueue):
            taskQueue[index] += speedQueue[index]
        
        while taskQueue[0] >= TASK_COMPLETED:
            taskQueue.popleft()
            speedQueue.popleft()
            cnt += 1
            if(len(taskQueue) == 0):
              break

        if cnt:
          answer.append(cnt)

    return answer

print(solution([93,30,55], [1, 30, 5]))