/**
 * string.js
 * 문자열 메소드(indexOf, substring, slice, split, toUpprCase,toLowerCse, trim, replace, includes)
 */


let result =
"Hello, jAVA   ".trim().toLocaleLowerCase().toUpperCase().replace('java','****');
console.log(result);


// 1번)
let strAry = [" Hello, Java            " 	//
		, " HTML, Css, JavaScript  "	//
		, "   Java is complier   "		//
		, "      Java and Javascript      "];
let filterWord = "java";
결과 => " HELLO, **** "
	   " HTML, CSS, ****SCRIPT"
	   " **** IS COMPILER"
	   " **** AND **** SCRIPT"
	   
// 2번)
let noAry = [ "920304-1213421", "990508 2928123", "030702-4323123"]
// 결과 => "920304-1213421"은 남자입니다.
//	   "990508 2928123"은 여자입니다.
//	   "030702-4323123"은 여자입니다.	    		

noAry.forEach(elem =>{
	let gen = elem.slice(-7)[0];	//성별문자구하기
	gen = elem.charAt(elem.length - 7);
	let gender = gen == '1' ? '남자' : (gen == '3' ? '남자' : '여자');
	switch (gen) {
		case '1' :
		case '3' :
			gender = '남자'; break;
 		case '2' :
		case '4' :
			gender = '여자'; break;
		default :
			gender = '기타';									
	}
	console.log (`"${elem}"은 ${gender}입니다.`);
});



let idx = "Hello, World". indexOf('W');
console.log(idx);	//찾을 값이 없을경우 -> -1값을 반환
"Hello, World".indexOf("Nice");
if (idx == -1 ){
	console.log("찾는 문자열이 없습니다.");
}
console.log(idx);


// '길동'이라는 이름이 총 몇명인지를 반환하는 함수를 생성 ↓
const names = ['홍길동', '홍길순', '김길동', '김민수'];
let count = 0;
function getkildong(){
	// forEach활용
	let cnt = 0;
	names.forEach(elem => {
		if (elem.indexOf('길동') != -1) {
			cnt ++;
		};
     });
	 console.log( `${cnt}명`);		
		}
getkildong();	// '2명'출력


// '김씨'를 찾아라
function getkildong(){
	// forEach활용
	let cnt = 0;
	names.forEach(elem => {
		if (elem.indexOf('김') == 0) {
			cnt ++;
		};
     });
	 console.log( `${cnt}명`);		
		}
getkildong();	// '2명'출력


const obj = {
	name: "홍길동", // obj.name
	age : 20,
	info : function(){
		return '이름은 ${this.name}, 나이는 ${this.age}';
	}
}
console.log(obj.name)

// 배열(문자)메서드 정의 활용
Array.prototype.sum = function(num1){
	this.push(num1);
}

const numbers = [1,2];
numbers. push(3);
numbers.sum(4);

console.log(numbers);