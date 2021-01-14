from collections import deque

def solution(skills_order, skill_tree):
    skills_order_dic = {}
    skill_tree_queue = deque(skill_tree)
    for index, skill in enumerate(skills_order, 1):
        skills_order_dic[skill] = index
    pre_skill = 1

    while skill_tree_queue:
        current_skill = skill_tree_queue.popleft()
        if skills_order_dic.get(current_skill):
            pre_skill = skills_order_dic.get(current_skill) ==  pre_skill and pre_skill + 1 or False

        if not pre_skill:
            return False

    return True