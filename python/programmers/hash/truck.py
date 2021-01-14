from collections import deque

def solution(max_weight, specs, names):
    answer = 1
    spec_dic = {}
    names_queue = deque(names)
    current_weight = 0
    for product, weight in specs:
        spec_dic[product] = int(weight)

    while names_queue:
        product_weight = spec_dic.get(names_queue.popleft())
        if current_weight + product_weight > max_weight:
            answer += 1
            current_weight = product_weight
        else:
            current_weight += product_weight

    return answer

print(solution(300, [["toy","70"], ["snack", "200"]], ["toy", "snack", "snack"]))