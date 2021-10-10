const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤;
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(combination => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};
const example = [1, 2, 3, 4, 5, 6, 7];
const result = getCombinations(example, 3);
console.log(result);
