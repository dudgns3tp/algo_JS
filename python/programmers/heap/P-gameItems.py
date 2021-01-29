import heapq
from collections import deque
def solution(healths, items):
    answer, itemsHeap, tmpList, dic = [], [], [], {}
    ATTACK_POWER, HP = 0, 1  
    healthsQueue = deque()
    heapq.heapify(healths)
    # key = 올려주는 공격력, value: item 인덱스
    for index, item in enumerate(items):
      dic[item[ATTACK_POWER]] = index + 1
    # 공격력이 높은순 최대 힙으로 만들어 주기.
    for item in items:
      heapq.heappush(itemsHeap, (-item[ATTACK_POWER], item))
    # 체력을 오름차순으로 큐에 넣어주기
    while healths:
      healthsQueue.append(heapq.heappop(healths))

    while healthsQueue:
      # 리스트에 들어있는 무기만큼 다시 힙을 만들자
      for index, item in enumerate(tmpList):
        heapq.heappush(itemsHeap, item)
      tmpList = []
      # 캐릭터 체력을 빼와서
      charactorHelath = healthsQueue.popleft()
      # itemsHeap이 다 소멸될때까지 순회
      while itemsHeap:
        thisItem = heapq.heappop(itemsHeap)
        if charactorHelath - thisItem[1][HP] >= 100:
          heapq.heappush(answer, dic.get(thisItem[1][ATTACK_POWER]))
          break 
        else: # 무기를 안쓰면 무기는 list에 담아 두자.
          tmpList.append(thisItem)
    result = []
    while answer: 
      result.append(heapq.heappop(answer))
    return result

print(solution([200, 120, 150], [[30, 100], [500, 30], [100, 400]]))