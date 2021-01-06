# heapify 일반적인 트리를 힙으로 변경하는 함수
def heapify(a, size):
  p = (size//2) - 1
  while p >= 0:
    siftdown(a, p, size)
    p -= 1

def siftdown(a, i, size):
  l = i*2 + 1 # left child node
  r = i*2 + 2 # right child node
  largest = i
  if l <= size-1 and a[l] > a[i]:
    largest = 1
  if r <= size-1 and a[r] > a[largest]:
    largest = r
  if largest != i:
    swap(a, i, largest)
    siftdown(a, largest, size)

