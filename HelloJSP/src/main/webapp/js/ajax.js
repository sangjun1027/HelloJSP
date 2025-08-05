/**
 *  ajax.js
 * Asynchronous Javascript And Xml
 */

// 동기방식  vs  비동기방식
console.log('1');
	
console.log('1');	//동기방식

console.log('2');	// console에 log안에있는 method를 실행

console.log('3');
// 1이 끝이나야 2가 실행, 2가 끝이나야 3이 실행 -> 순차적


// 비동기방식
setTimeout(function() {		// 비동기방식, 매개값을 2개 받음
	console.log('1');
}, 1000);		// 1초뒤 실행

setTimeout(function() {		
	console.log('2');
}, 2000);		// 2초뒤 실행

setTimeout(function() {		
	console.log('3');
}, 500);		// 0.5초뒤 실행
// 순서는 1부터 3이지만, 시간차로 실행
// 시간차 실행이 왜 좋으냐? ↓
//				동기방식의 경우 전체 진행시간 3.5초
//				비동기방식의 경우 전체 진행시간 2초 / 즉, 시간적인 이점이 있음. ex)cafe

const xhtp = new XMLHttpRequest();	// 대표적인 비동기방식 처리하는 객체 (과거에...)


