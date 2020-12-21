let result = new Map;
result.set('abc', 'muzi');
result.set('abc','muzi2' );
result.set('ab', '영훈');
console.log(result.get('abc'));
console.log([...result.values()]);