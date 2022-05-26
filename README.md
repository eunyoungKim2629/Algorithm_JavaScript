## 자바스크립트 알고리즘(feat. 프로그래머스)

<br>

## GOAL 🙋🏻‍♀️

- README.md 파일에 사진과 코드를 기록으로 남기고, 다른 사람들의 코드도 분석하며, 알고리즘 실력을 향상시킨다.
- 클린 코딩을 생활화하고, 깊이있는 학습을 목표로 한다.

<br>

## WARNING ❗️

- 배열의 고차함수를 적극적으로 사용하며, 메모리의 사용을 최소화한다.
- 문제 설명과 제한 조건이 기록된 이미지 파일을 같이 첨부하고, 코드 또한 README.md 파일에 기록한다.

<br>
<br>

## 1. 1단계 문제

### 1-1. x만큼 간격이 있는 n개의 숫자

<br>

<img src="./image/image01.png">

```javascript
function solution(x, n) {
	return new Array(n).fill(x).map((value, index) => value * (index + 1));
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
```
### 1-2. 핸드폰 번호 가리기

<br>

<img src="./image/image02.png">

```javascript
const solution = (phoneNumber) => {
  const arr = phoneNumber.split('');
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr.length > 4 ? '*' : arr[i];
    i++;
  }
  return arr.join('');
}

const solution = (phonNumber) => {
  return phonNumber.split('').map((str, index) => (phoneNUmber.length - index) > 4 ? '*' : str);
}

const solution = (phoneNumber) => {
  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(phoneNumber.length - 4, phoneNumber.length);
}
```