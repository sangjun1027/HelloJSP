/**
 * function.js
*/

// 함수 선언식
//function sum(num1, num2){		//매개값 num1, num2
//	let result = num1 + num2;
//	return rsult;
//}

// 함수를 정의 할 때 간단하게 표현하는게 화살표함수!
let sum = (num1, num2) => num1 + num2;	//실행구문이 하나밖에 없을 때는 중괄호도 삭제가능
sum(10, 12);

// 함수를 정의 할 때 간단하게 표현하는게 화살표함수!
// 함수표현식
let showInfo = (result) => console.log(result);	//실행구문이 하나밖에 없을 때는 중괄호도 삭제가능

showInfo('Hello, World');	// showInfo -> method
