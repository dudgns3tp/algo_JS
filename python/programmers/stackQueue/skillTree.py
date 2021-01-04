from collections import deque

def solution(skill, skill_trees):
	answer = 0
	for i in skill_trees :
		queue = deque(skill)
		customSkill = deque()
		for j in list(i.upper()):
			if j in queue:
				customSkill.append(j)
		if len(customSkill) == 0 :
			answer +=1
		while customSkill :
			if queue.popleft() != customSkill.popleft() :
				break
			if len(customSkill) == 0 :
				answer += 1
	return answer


print(solution("CBD",["ABAS", "SQRS", "CDBAPR", "BAEQSPRL"]))