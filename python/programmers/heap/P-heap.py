from collections import deque
import heapq

exec_times = [3, 1, 1, 2, 1, 5]

def solution(n, exec_times):
  queue = deque(exec_times)

  FINISHED_AT, SERVER_ID, JOBS_DONE = 0, 1, 2
  servers= [[0, i, 0] for i in range(n)]
  heapq.heapify(servers)
  print(servers)

  while queue:
    target_server = heapq.heappop(servers)
    target_server[FINISHED_AT] += queue.popleft() # [3,0,0], [0,1,0], [0,2,0]
    target_server[JOBS_DONE] += 1
    heapq.heappush(servers, target_server)

  servers.sort(key=lambda x: x[SERVER_ID])
  return[server[JOBS_DONE] for server in servers]

print(solution(3, exec_times))
