from collections import deque

queue = deque()
print(queue[0])
queue.append(7)
print(queue.popleft())
print(queue)
print(sum(queue))


timer = [0]

for i in range(len(timer)) :
  timer[i] += 1 

print(timer)
timer.remove(1)
print(timer)




