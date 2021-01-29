import heapq

def solution(no, works):
  # 힙 생성
  heap = []
  # 최대힙 생성
  for work in works:
    heapq.heappush(heap, (-work, work))
  FAKE_COST, COST = 0, 1
  while no:
    if not heap[FAKE_COST][COST]: break
    work = heapq.heappop(heap)[COST] - 1
    heapq.heappush(heap, (-work, work))
    no -= 1

  return sum(list(map(lambda work: work[COST]**2, heap)))

print(solution(4, [4,3,3]))
