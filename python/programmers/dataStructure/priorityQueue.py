"""
Priority Queue클래스가 제공하는 메소드와 멤버 변수
메소드    qsize() 들어있는 데이터의 길이를 리턴
메소드    empty() 큐가 비어있는지 검사
메소드    put_nowait(item) item을 큐에 삽입
메소드    get_nowait() 가장 작은 원소를 큐에서 제거하고 리턴
멤버 변수  queue 현재 큐에 들어있는 데이터
"""

# put_nowait(item)
## PriorityQueue 는 heapify같이 데이터를 한 번에 힙 정렬하는 기능이 없다. 따라서 힙 정렬할 데이터가 주어진다면,
## 데이터 수만큼 데이터를 삽입해야 합니다.
from queue import PriorityQueue

myList = [13, 2, 1, 5, 10]
pq = PriorityQueue()
for val in myList:
  pq.put_nowait(val)

print(pq.queue)


# get_nowait(item)
# 데이터를 가져올때에는 get 또는 get_nowait 메소드를 사용함
# 큐가 빌때까지 가져오기
myList = [13, 2, 1, 5, 10]
pq = PriorityQueue()
for val in myList:
  pq.put(val)

while not pq.empty():
  print(pq.get_nowait())
