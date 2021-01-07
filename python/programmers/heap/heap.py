from collections import deque
import heapq

exec_times = [3, 1, 1, 2, 1, 5]

def solution(n, exec_times):
  queue = deque(exec_times)

  FINISHED_AT, SERVER_ID, JOBS_DONE = 0, 1, 2
  servers= [[0, i, 0] for i in range(n)]
  print(servers)
  heapq.heapify(servers)
  print(servers)
  print(queue)
  """
  while queue:
    target_server = heapq.heappop(servers)
    target_server[FINISHED_AT] += queue.popleft()
    target_sevrer[JOBS_DONE] += 1
    print(servers)
"""
print(solution(3, exec_times))
