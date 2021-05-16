function solution(nums) {
    let pocketMon = new Set(nums);
    let maxCount = nums.length / 2;
    let pocketMonCount = [...pocketMon].length;
    if (maxCount > pocketMonCount) return pocketMonCount;
    else if (maxCount <= pocketMonCount) return maxCount;
}

solution([3, 3, 3, 2, 2, 4]);
