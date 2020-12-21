def solution(numbers, hand):
  answer = ''
  handLocation = {'L':4, 'R':4}
  left = [1, 4, 7]
  mid = [2, 5, 8, 0]
  right = [3, 6, 9]
  keypad = [[1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9],
            ['*', 0, '#']]
  hand = 'L' if hand == "left" else 'R'
  for i in range(len(numbers)) :
    # mid라면 가장 가까운거 else 손잡이인거
    if mid.count(numbers[i]) != 0 :
      midLocation = mid.index(numbers[i]) + 1
      if abs(handLocation.get('L') - midLocation) > abs(handLocation.get('R') - midLocation) :
        answer += 'R'
        handLocation['R'] = mid.index(numbers[i]) + 1
      elif abs(handLocation.get('L') - midLocation) < abs(handLocation.get('R') - midLocation) :
        answer += 'L'
        handLocation['L'] = mid.index(numbers[i]) + 1
      else :
        answer += hand
    elif left.count(numbers[i]) != 0 :
      answer += 'L'
      handLocation['L'] = left.index(numbers[i]) + 1
    else:
      answer += 'R'
      handLocation['R'] = right.index(numbers[i]) + 1
    print(handLocation)
  return answer

print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
