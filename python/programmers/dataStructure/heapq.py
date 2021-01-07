import heapq

myList = [13, 2, 1, 5, 10]
heapq.heapify(myList) # heapify 함수는 주어진 리스트를 힙 정렬을 수행함 시간 복잡도는 O(n)

print(myList) # [1, 2, 13, 5, 10]

print("============")
# heappop 예시 1
# heap을 유지하면서 가장 작은 원소를 제거하는 방법. (힙이 정렬된 상태에서 실행시켜야됩니다.)

retVal = heapq.heappop(myList) # 가장 작은 원소인 1이 리턴됨

print("리턴된 값:", retVal) # 1
print("남은 원소:", myList) # [2, 5, 13, 10]
print("============")

# heappop 예시 2
myList = [13, 2, 1, 5, 10]
heapq.heapify(myList)

  ## 작은 원소가 먼저 제거됩니다.
while myList:
  print("리턴된 값:", heapq.heappop(myList))

print("============")
# heappush 예시 1

myList = [13, 2, 1, 5, 10]
heapq.heapify(myList)

# -1 삽입
heapq.heappush(myList, -1)
print("남은 원소:", myList) # [-1, 2, 1, 5, 10, 13]

## heap 가장 작은 원소에 접근
print("리스트의 맨 앞 원소:", myList[0])
print("============")


# maxHeap으로 만들기
myList = [13, 2, 1, 5, 10]
heap = []
for num in myList:
  heapq.heappush(heap, (-num, num))

while heap:
  print(heapq.heappop(heap)[1])

print(heap)


