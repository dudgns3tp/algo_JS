function solution(str1, str2) {
  const [ITEM, COUNT] = [0, 1];
  const NOT_FOUND = -1;
  const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ 1234567890]/gim;
  const splitReducer = (acc, _, index, origin) => {
    if (index === 0) return acc;
    const word = `${origin[index - 1]}${origin[index]}`;
    if (word.search(reg) !== NOT_FOUND) return acc;
    return acc.concat(word);
  };

  const mapReducer = (acc, cur, index) => {
    if (!acc.has(cur)) return acc.set(cur, 1);
    let item = acc.get(cur);
    acc.set(cur, item + 1);
    return acc;
  };

  const split2Word = str => str.split('').reduce(splitReducer, []);

  const intersectionFunc = (A, B) => {
    const result = [];
    for (let [key, count] of A) {
      if (!B.has(key)) continue;
      const cnt = Math.min(B.get(key), count);
      for (let i = 0; i < cnt; i++) {
        result.push(key);
      }
    }
    return result;
  };

  const unionFunc = (A, B) => {
    const result = [];
    for (let [key, count] of A) {
      if (B.has(key)) {
        const cnt = Math.max(B.get(key), count);
        for (let i = 0; i < cnt; i++) {
          result.push(key);
        }
      } else {
        for (let i = 0; i < count; i++) {
          result.push(key);
        }
      }
    }

    for (let [key, count] of B) {
      if (!A.has(key)) {
        for (let i = 0; i < count; i++) {
          result.push(key);
        }
      }
    }
    return result;
  };

  let arr1 = split2Word(str1.toUpperCase()).reduce(mapReducer, new Map());
  let arr2 = split2Word(str2.toUpperCase()).reduce(mapReducer, new Map());
  const intersection = intersectionFunc(arr1, arr2).length;
  const union = unionFunc(arr1, arr2).length;
  if (union === 0) return 1 * 65536;

  return Math.floor((intersection / union) * 65536);
}
