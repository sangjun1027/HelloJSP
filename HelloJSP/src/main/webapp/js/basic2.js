/**
 * basic2.js
 */
const fruits = ['apple', 'banana', 'cherry'];	// == new Array();	/ 배열객체생성 방법 ex)문자열 3개를 담음
fruits[3] = ' orange';

// 추가, 삭제
fruits.push('melon');	// 배열 맨 마지막에 추가
fruits.unshift('mango') // 배열 맨 앞에 추가
fruits.pop();	// melon 제거, 즉 맨 뒤에서부터 제거
fruits.pop();	// orange 제거
fruits.shift(); // mango 제거, 즉 맨 앞에서부터 제거
fruits.shift(); // apple 제거

for (let fruit of fruits) {		//반복변수가 fruits
	console.log(fruits);
}


// 배열에 객체 type 담기
const members = [{id:'user01', name:'Hong', point:100}];	// members 라는 배열선언및할당, 배열객체: members
members.push({id: 'user02', name: 'Park', point:120});
members.push({id: 'user03', name: 'Kim', point:90});

for(let i = 0; i < members.length; i ++){
	if (members[i].point >= 100 )
	console.log(`id: ${members[i].id}, name:${members[i].name}, point: ${members[i].point}`);
}

// 반복문 , forEach 사용!, 배열에만 사용가능. 즉, 배열객체만 가지고있는 method
//members.forEach(function(elem, idx, ary){	// 매개값으로 함수(즉, 기능)를 받음
//	if (elem.point >= 100)	// elem 중 point가 100보다 큰 값만 출력하겠다!
//	console.log(`id: ${elem.id}, name: ${elem.name}, point: ${elem.point}`);
//});	// 첫 번째(a)는 배열요소안에있는 값, 두 번째(b)는 idex, 세 번째(c)는 배열 그자체 출력  => ex) function(a,b,c)


//화면에 배열의 갯수만큼 회원정보를 추력하는 함수
function showList(){

	//반복문.forEach
//	members.forEach(function(elem, idx, ary){
//		let str = `<li>아이디: ${elem.id}, 이름: ${elem.name}, 포인트: ${elem.point}</li>`		// 빽팁에서는 변수가져오 때 $ {
	// ul요소 가져오는 법
//		document.querySelector('#list').innerHTML += str;	// querySelector -> 중요 ! , 화면에 보이는 값 inneHTML
// });
// }	// end of showList
// showList();

// ↑내용을 화살표 함수로 변환



	//반복문.forEach
	members.forEach( (elem, idx, ary) => {	//function없애고 화살표함수 
		let str = `<li>아이디: ${elem.id}, 이름: ${elem.name}, 포인트: ${elem.point}</li>`		// 빽팁에서는 변수가져오 때 $ {
		
	
	// ul요소 가져오는 법
		document.querySelector('#list').innerHTML += str;	// querySelector -> 중요 ! , 화면에 보이는 값 inneHTML
});
}	// end of showList
showList();




// 이벤트
document.querySelector("#addBtn").addEventListener('click', function(){	//function -> 함수
	let id = document.querySelector('#mid').value;
	let name = document.querySelector('#mname').value;
	let point = document.querySelector('#point').value;
	
	// 함수는 return구문을 만나면 종요됨
	// 필수값을 입력하도록
	if ( id == '' ||  name == '' || point == ''){
		window.alert("필수값을반드시입력라고 !!!!!");
		 return ;
	}
	
	document.querySelector('#list').innerHTML = '';		//초기화
	// 배열에 추가
	members.push({id: id, name: name, point: point});			
	showList();
	
	// 입력값들을 초기화해주는 것 ↓
	document.querySelector('#id').innerHTML = '';				
	document.querySelector('#mname').innerHTML = '';				
	document.querySelector('#point').innerHTML = '';				
})
