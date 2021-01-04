from collections import deque

def solution(bridge_length, weight, truck_weights):
    answer = 0
    queue = deque()
    truck = deque(truck_weights)
    timer = []
    while truck or queue :
      # 다리에 머물러있던 트럭의 시간 1씩 증가
      for i in range(len(timer)) :
        timer[i] += 1 

      # 타이머[0]가 다리 길이만큼 시간이 지났다면 큐에서 제거 및 타이머도 제거
      if len(timer) > 0 and timer[0] == bridge_length :
        queue.popleft()
        timer.remove(bridge_length)

      # 다리에있는 무게와 들어올 트럭의 무게의 중량 비교! 작으면 큐에 넣고 아니면 pass
      if len(truck) > 0 and sum(queue) + truck[0] <= weight :
        queue.append(truck.popleft())
        timer.append(0)
      else :
        pass
      answer +=1
    return answer

print(solution(2, 10, [7,4,5,6]))