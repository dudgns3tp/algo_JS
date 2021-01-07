# with BFS
from collections import deque

def solution(n, m, image):
    cnt = 0
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    for i, x in enumerate(image):
      for j, y in enumerate(image[i]):
        cnt += BFS(i, j, y, image, dx, dy, n, m)
    return cnt

def BFS(x, y, area, image, dx, dy, n, m):
  queue = deque()
  queue.append((x, y))
  
  while queue:

    if area == 0:
      return 0

    x, y = queue.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      # 범위를 벗어났거나
      if nx < 0 or nx >= n or ny < 0 or ny >= m:
        continue

      # 같은 area라면
      if image[nx][ny] == area:
        image[nx][ny] = 0 # 방문 체크를 해주고
        queue.append((nx, ny)) # 다시 큐에 삽입
  return 1

print(solution(3, 2, [[1, 2], [1, 2], [4, 5]]))