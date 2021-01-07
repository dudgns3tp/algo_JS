import heapq

def solution(no, works):
  # 힙 생성
  heap = []

  # 최대힙 생성
  for num in works:
    heapq.heappush(heap, (-num, num))
  
  # 솔루션
  while no > 0:
    if not heap[0][1]:
      break
    work = heapq.heappop(heap)[1] - 1
    heapq.heappush(heap, (-work, work))
    no -= 1

  return sum(list(map(lambda x: x[1]**2, heap)))

print(solution(4, [1,1,1]))
