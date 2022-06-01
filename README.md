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
```
```javascript
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
```
```javascript
const solution = (phonNumber) => {
  return phonNumber.split('').map((str, index) => (phoneNUmber.length - index) > 4 ? '*' : str);
}
```
```javascript
const solution = (phoneNumber) => {
  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(phoneNumber.length - 4, phoneNumber.length);
}
```

### 1-3. 행렬의 덧셈

<br>

<img src="./image/image03.png">

```javascript
const funcSolution = (arrArg01, arrArg02) => {
	let arrResult = new Array(arrArg01.length).fill(0).map(()=> new Array(arrArg01[0].length).fill(0));
	let i = 0;
	let j = 0;
	while (i < arrArg01.length) {
		while (j < arrArg01[i].length) {
			arrResult[i][j] = arrArg01[i][j] + arrArg02[i][j]
			j++;
		}
		j = 0;
		i++;
	}
	return arrResult;
};
```
```javascript
const funcSolution = (arrArg01, arrArg02) => {
  return arrArg01.map((value01, index01) => value01.map((value02, index02) => value02 + arrArg02[index01][index02])) 
}
```

### 1-4. 짝수와 홀수

<br>

<img src="./image/image04.png">

```javascript
const funcSolution = (numArg) => {
  return ( numArg % 2 ) ? "Odd" : "Even";
}
```

### 1-5. 제일 작은 수 제거하기

<br>

<img src="./image/image05.png">

```javascript
function solution(arrArg) {
	return arrArg.length > 1 ? arrArg.filter((num) => num !== Math.min(...arrArg)) : [-1];
};
```

### 1-6. 자연수 뒤집어 배열로 만들기

<br>

<img src="./image/image06.png">

```javascript
function solution(n) {
	return n.toString().split('').reverse().map((num) => parseInt(num));
}
```

### 1-7. 약수의 합

<br>

<img src="./image/image07.png">

```javascript
function solution(num) {
	let result = 0;
	let i=0;
	let j=0;
	while(i <= num) {
		while(j >= 1) {
			i * j === num && (result += i)
			j++;
		}
		j =num;
		i++;
	}
	return result;
}
```
```javascript
function solution(num) {
	let result = 0;
	for(let i=0; i<num; i++) {
		num % i === 0 && (result += i)
	}
	return result;
}
```
```javascript
function sumDivisor(num) {
	var d1 = [];
	var sqrt = Math.sqrt(num);
	for (var i = 1; i < sqrt; i++) {
		if (num % i == 0) d1.push(i);
	}
	var d2 = d1.map((v) => num / v);
	return d1.reduce((a, b) => a + b) + d2.reduce((a, b) => a + b);
}
```

### 1-8. 문자열을 정수로 바꾸기

<br>

<img src="./image/image08.png">

```javascript
function solution(s) {
	return +s;
}
```

### 1-9 문자열 다루기 기본

<br>

<img src="./image/image09.png">

```javascript
function solution(str) {
	return (str.length == 4 || solution.length == 6) && str.split('').every((value) => !isNaN(value));
}
```
```javascript
function solution(s) {
	return /^\d{4}$|^\d{6}$/.test(s)
}
```

### 1-10 서울에서 김서방 찾기

<br>

<img src="./image/image10.png">

```javascript
function solution(seoul) {
	return `김서방은 ${seoul.findIndex((name) => name == 'Kim')}에 있다`;
}
```

```javascript
function solution(seoul) {
	return `김서방은 ${seoul.map((name,index) => name == 'Kim' ? index : name ).filter((value) => value == +value).join('')}에 있다`
}
```
```javascript
function solution(seoul) {
	for (let i = 0; i < seoul.length; i++) {
		if (seoul[i] == 'Kim') {
			return `김서방은 ${i}에 있다`;
		}
	}
}
```

### 1-11 두 개 뽑아서 더하기

<br>

<img src="./image/image11.png">
```javascript

```
```javascript
function solution(arrArg) {
	const answer = new Set();
	for(let i=0; i<arrArg.length-1; i++) {
		for(let j=i+1; j<arrArg.length; j++) {
			answer.add(arrArg[i]+arrArg[j])
		}
	}
	return [...answer].sort((a,b) => a - b);
}
```

### 1-12 두 정수 사이의 합

<br>

<img src="./image/image12.png">

```javascript
function solution(num01,num02) {
	let numAnswer = 0;
	if(num01 < num02) {
		for(let i=num01; i<=num02; i++ ) {
		numAnswer += i;
		}
	} else {
		for(let i=num02; i<=num01; i++){
			numAnswer +=i;
		}
	}
	return numAnswer;
}
```
```javascript
function solution(num01, num02) {
	let numAnswer = 0;
	for (let i = Math.min(num01, num02); i <= Math.max(num01, num02); i++) {
		numAnswer += i;
	}
	return numAnswer;
}
```