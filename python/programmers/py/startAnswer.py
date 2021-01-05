import heapq

def solution(n, works):
    if n > sum(works):
        return 0
    works = [(-i, i) for i in works]
    heapq.heapify(works) 
    for _ in range(n):
        w = heapq.heappop(works)[1] - 1
        heapq.heappush(works, (-w, w))
    return sum([i[1]**2 for i in works])

print(solution(4, [4,3,3]))