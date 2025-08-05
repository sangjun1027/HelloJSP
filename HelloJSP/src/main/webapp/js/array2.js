/**
 * array2.js
 * filter method
 * 요소의 값이 true가 반환될 떄, 그 요소를 새로운 배열에 생성 
 */

function makeRow(member) {
	// tr>td*7가능/ 즉, td를 7개 만들겠다
	let tr = document.createElement('tr');

	for (let prop in member) {

		let td = document.createElement('td');
		td.innerText = member[prop];
		tr.appendChild(td);
	}

	let td = document.createElement('td');
	let btn = document.createElement('button');

	btn.addEventListener('click', (e) => {

		let parent = e.target.parentElement.parentElement;

		let fn = parent.children[1].innerText;
		let ln = parent.children[2].innerText;

		if (confirm(`${fn}, ${ln}을 삭제하시겠습니까?`)) {
			e.target.parentElement.parentElement.remove();
		}
	})
	btn.innerText = '삭제';
	td.appendChild(btn);

	tr.appendChild(td);
	return tr;
}

// 급여가 7000 이상인 사람들 목록을 만들어보자 + 그 후 female만 뽑아보자
// 전체목록을 가져와서 filter를 활용하면 됨

//members.filter(elem => {	// idx, ary는 필요없으면 선언안해도됨, 
//	return elem.salary >= 7000;	//화살표함수 활용. 조건(?)이 하나만있을 때 가능
//}) .forEach(elem => {
//	let tr = makeRow(elem);
//	document.querySelector('#show tbody').appendChild(tr);
//});

// 위 내용을 화살표함수를 극한(?)으로 활용한 것 ↓
members
	.filter(elem => elem.salary >= 7000)
	.filter(elem => elem.gender == 'Female')
	
	// obj = {id:1, fn: 'hong', ln: 'kil'}
	// map : 새로운 배열을 반환해줌. 즉, data모양이 변경됨 / A - A'으로 매핑
	.map(elem => {	// map도 filter과 비슷(?), 결국은 속성을 줄여서 출력하기위한 method
		let {id, first_name, last_name, salary} = elem;	
		//{id,first_name, last_name, email, salary, gender}와 같은 정보가 있음
		let obj = {id, first_name, last_name, salary}	// important !!!
		return obj;	
	})	
	.forEach(elem => document.querySelector('#show tbody')
		.appendChild(makeRow(elem)));


let result = [10, 20, 30, 40, 50.].filter((elem, idx, ary) => {
	if (elem >= 30) {
		return true;
	}
});
console.log(result);
