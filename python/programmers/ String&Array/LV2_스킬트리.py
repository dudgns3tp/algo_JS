from collections import deque

def solution(skill, skill_trees):
	answer = 0
	for _, thisSkillTree in enumerate(skill_trees):
		queue = deque(skill)
		customSkill = deque()
		for _, thisSkill in enumerate(list(thisSkillTree)):
			if thisSkill in queue:
				customSkill.append(thisSkill)
		if not len(customSkill):
			answer +=1
		while customSkill:
			if queue.popleft() is not customSkill.popleft():
				break
			if not len(customSkill):
				answer += 1
	return answer


print(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]))