/**
 * basic.js
 */
console.log("basic");

// var name = 'Hong'; //변수선언

// name = 'Hwang';	// 새로운값을 할당

// var name = 'Park'	//
// console.log(name);

let name = 'Kim';	// 변수의 선언은 한번만 선언!
const age = 20;	//값이 한 번 할당되고나면 변경불가! 상수이기 때문
// age = 30;	// error이 남

//object type 선언
const obj = new Object();	// {}
obj.name = 'Hong';
obj.age = 20;
obj.info = function () {
	console.log('이름은' +  obj.name + ', 나이는' + obj.age);
}
obj.hobbies = ['독서', '수영', '자전거'];	// '취미'라는 속성 선언
obj.pets = [{name:'야옹이', age:2}, {name:'멍멍이', age:3}]	//


console.log(obj.age);
console.log(obj['name']);
console.log('첫번 째 취미: ' +  obj.hobbies[0]);		// 배열이기에 index, .연산자(점사용법)
console.log('두번 째 취미: ' +  obj['hobbies'][1]);	// 대괄호사용법
console.log(`세번 째 취미:${obj['hobbies'][2]}`);		// 백팁으로도 문자열생성 가능(빽팁사용법)

obj.pets[0].name = '고양이'; 
obj.pets[1].name;	

// Object(객체)구조를 볼려면 (즉, 화면에 있는 구성요소를 파악할 수 있음)
console.log(this); 	
console.dir(window.document.children[0].children[1].innerHTML);	// 객체모형으로 보는 법 dir, children은 하위요소(존나많음)
window.alert('윈도우객체의 alert라는 함수')	// 창띄우는 기능, window객체가 가장 상위객체이며 그 아래 하위객체도 있다(존나많음)


obj.info();