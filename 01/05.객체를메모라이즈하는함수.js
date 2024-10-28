function simpleMemoize(fn) {
  const cache = {};

  return function (obj) {
    const key = JSON.stringify(obj);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(obj);
    cache[key] = result;
    return cache;
  };
}

// 예시로 사용할 함수
function addValues(obj) {
  return Object.values(obj).reduce((acc, val) => acc + val, 0);
}

// 메모이제이션 적용
const memoizedAddValues = simpleMemoize(addValues);

// 테스트
const input = { a: 1, b: 2, c: 3 };
const input2 = { a: 1, b: 2, c: 4 };
console.log(memoizedAddValues(input)); // 첫 호출, 계산 후 결과 반환
console.log(memoizedAddValues(input2)); // 두 번째 호출, 캐시된 결과 반환
