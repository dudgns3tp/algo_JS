## 자료구조 정리

### queue

큐는 FIFO(First In First Out)을 보장하는 자료구조! 

#### deque 객체
deque는 스택과 큐를 합친 자료구조입니다. 가장자리에 원소를 넣거나 뺄 수 있습니다.덱에서는 다음 메소드를 제공합니다.
| 메소드 | 설명 |
| :---: |:---:|
|  deque([iterable[, maxlen]]) | 덱의 초기화 함수. iterable(리스트 등)을 인자로 건네면 이를 deque화 해줌 |
| append(x) | x를 덱의 오른쪽에 삽입합니다. |
| popleft() | 덱의 가장 왼쪽에 있는 원소를 덱에서 제거하며, 그 값을 리턴
| clear() | 모든 원소를 지움|

> 큐를 list로 이용하지 않는 이유는 스택에서 list.append와 list.pop()을 이용했던 것 처럼 list.append와 list.pop(0)을 이용하면 리스트를 큐 처럼 사용할 수 있습니다. 허나 pop() 의 시간 복잡도는 O(1)인 반면 pop(0)의 시간 복잡도는 O(N)이기 때문에 시간이 오래걸림. 따라서 **시간복잡도를 고려해 리스트는 큐로 사용하지 않음**

#### deque - init

deque([iterable[, maxlen]])를 이용해 초기화 합니다
```py
from collections import deque

# 빈 큐 만들기
deque1 = deque()

# 원소가 있는 큐 만들기
deque2 = deque([1, 2, 3])

# 큐 최대 길이 명시하기(원소 수가 maxlen에 도달했을때 새로운 값을 넣으면, 앞서 넣은 값은 사라지고  pop이 일어남, 뒤에 새 값이 들어감)
deque3 = deque(maxlen=5)
```

#### deque - append(x)
큐에 원소를 넣을때 사용합니다
```py
my_deque = deque()
my_deque.append(3)

print(my_deque)

deque([3])
```

#### deque - popleft()
큐에 원소를 제거할때 사용합니다.
```py
my_deque = deque([1,2,3])

while my_deque:
  print("{}을/를 pop했습니다".format(my_deque.popleft()))

"""
1을/를 pop했습니다
2을/를 pop했습니다
3을/를 pop했습니다
"""
```



#### heapq와 PriorityQueue
- heapq(힙)은 데이터가 **지속적으로 정렬돼야** 하며  데이터의 **삽입/삭제가** 빈번하게 일어날때 사용


``` py
def add_many(*args): 
     result = 0 
   for i in args: 
         result = result + i 
     return result 
```

```*args ``` 가 있으면  특정 함수에 모든 매개변수들이 list로 들어옴!

```py
def print_kwargs(**kwargs):
  print(kwargs)

print_kwargs(a = 1)
// {'a' : 1}

print_kwargs(name='foo', age = 3)
// {'name' = foo, 'age' = 3}
```
키워드 파라미터 ```**kwargs```를 사용할때는 앞에 별 두개를 붙힌다
kwargs 는 딕셔너리가됨!

### global

``` py
a = 1
  def vartest():
    global a
    a = a + 1

vartest()
print(a) // 2
```

### lambda
lambda는 함수를 생성할 때 사용하는 예약어로 def와 동일한 역할을 한다. 보통 함수를 한줄로 간결하게 만들 때 사요한다.
def를 사용해야 할 정도로 복잡하지 않거나 def를 사용할 수 없는곳에 주로 쓰인다
```py
add = lambda a, b : a+b
result = add(3, 4)
print(result)
```
람다는 return 명령어가 없어도 결괏값을 돌려준다.


### Counter

``` py
import collections

def solution(participant, completion) :
  p = collections.Counter(participant) 
  c = collections.Counter(completion)
  answer = p - c
  return list(answer.keys())[0]

participant = ["leo", "kiki", "kiki", "eden"]
completion = ["kiki", "leo", "eden"]

print(solution(participant, completion))
```

카운터는 ** 딕셔너리를 받는 함수인데 딕셔너리 키 별로 몇개의 키를 가지고있는지 알려줌.


### Unpacking *
```py
a = 7
b = 5
print( *divmod(a, b)) # 1 2
```

