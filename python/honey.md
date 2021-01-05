## 파이썬 정리


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