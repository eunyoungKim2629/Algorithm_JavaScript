'use strict';

// function solution(x, n) {
// 	const result = [];
// 	let i = 1;
// 	while (i <= n) {
  // 		result.push(x * i);
  // 		i++;
  // 	}
  // 		return result;
// }

function solution(x, n) {
	return new Array(n).fill(x).map((value, index) => value * (index + 1));
}

function solution(x, n) {
	return new Array(n).fill(0).map((_, index) => x * (index + 1));
}

function solution(x, n) {
	const result = [];
	let i = 1;
	while (i <= n) {
		result.push(x * (i));
		i++;
	}
  return result;
}

console.log(solution(2, 5));
