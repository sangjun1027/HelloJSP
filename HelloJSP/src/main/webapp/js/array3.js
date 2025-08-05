/**
 * array3.js
 */

// 80점 이상인 선수만 모아서 새로운 배열을 생성해보자
let lionsAry = [
	{name: "박병호", score: 52},	//name은 object type
	{name: "구자욱", score: 88},
	{name: "원태인", score: 93},
	{name: "백정현", score: 77},
	{name: "이호성", score: 70},
	{name: "최원태", score: 71},
	{name: "강민호", score: 66},
	{name: "김성윤", score: 97},
	{name: "디아즈", score: 99},
]/*
let result = lionsAry.reduce((acc, elem) => {
	if (elem.score >= 80) {
		acc.push(elem);		
	}
	return acc;
}, lionsAry[0]);
console.log(result);
*/

// 최고점자와 그 점수를 찾아보자
//	let champion = lionsAry.reduce((acc, elem) => {
// 	console.log(' acc => ', acc, 'elem => ',elem);
// 	if (elem.score < elem.score) {
//	acc= elem;		
//	}
//	return acc;
//}, lionsAry[0]);
//console.log(`최고점자는 ${champion.name}, 점수는 ${champion.score}점 입니다.`);


let results = lionsAry.reduce((acc, elem) => {
	let tr = document.createElement('tr');
	for ( let prop in elem) {
		  let td = document.createElement('td');
		  td.innerText = elem[prop];
		  tr.appendChild(td);
	}	
	acc.appendChild(tr);
	
	return acc;

}, document.querySelector('#item tbody'));
		








// let numAry = [10, 15, 34, 77, 20, 25, 30]
// reduce의 첫 번째 매개변수, 두 번째 매개변수가 acc초기값 
// 합계산 하는 rduce 사용방식 ↓
// let result = numAry.reduce((acc, elem, idx, ary) => {	// acc:누적값에 사용됨
// acc는 10을 리텀 -> 0을 출력, 15를 리턴 -> 10을 출력
//	console.log( `${acc}, ${elem}`)
//	return acc > elem ? acc : elem;	// 최대값 구하기 : acc보다 elem이 크면 !
//}, []);
//console.log(result);


let numAry = [10, 15, 34, 77, 20, 25, 30]
result = numAry.reduce((acc, elem, idx, ary) => {	
	console.log( `${acc}, ${elem}`);
	// acc가 값이 없는 배열객체
	if( elem % 2 == 0) {		// 짝수만 담겨있는 배열 !
		acc.push(elem);		// acc에 값이 없기에 push 해서 넣어줌
	}
	return acc;	//[10]
}, []);
console.log(result);
