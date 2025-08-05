/**
 * object.js
 */
console.log(members);

console.log(members[0]);

for (let member of members) {	//for .. of 반복문
	// 15개의 data가 있는데 

	//let member = members[0];	// {id:?, fn:?, inL? ...} / 여러가지 속성들이 있다

	//각각의 속성에 있는 값을 펼쳐서 변수에 한방에 담을 수 있음 ↓ / 디스트럭쳐!
	let { id, first_name, last_name, email } = member;
	console.log(`${id}, ${first_name}, ${last_name}, ${email}`);
	let tr = document.createElement('tr');
	//member.id
	//member['id']  ↑와 같음


	for (let prop in member) {	// for .. in 반복문
		// let id = member.id;	
		// let first_name = member.first_name;
		//각각의 속성에 있는 값을 변수에 담을 수 있음 ↑

		console.log(`속성: ${prop}, 값: ${member[prop]}`);

		if (prop == 'gender') {
			if (member[prop] == 'Female') {
				tr.style.backgroundColor = 'pink';
			} else if (member[prop] == 'Male') {
				tr.style.backgroundColor = ' yellow ';
			}
		}

		let td = document.createElement('td');
		td.innerText = member[prop];	// <td>Messi</td>
		tr.appendChild(td);
	} // end of for in

	// 삭제버튼 :  <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button');
	// 이벤트와 이벤트핸들러 , 삭제전 알림창 뜨는 것도
	btn.addEventListener('click', (e) => {
		console.dir(e.target.parentElement.parentElement);	// tr값

		let parent = e.target.parentElement.parentElement;
		console.log(parent.children)
		// ↑ tr에서 children 하면 자식요소를 다 가져옴. 즉, 각 td들 다 소환(?)
		let fn = parent.children[1].innerText;
		// td의 속성 중 [1](first_name)을 활용
		let ln = parent.children[2].innerText;
		// td의 속성 중 [2](last_name)을 활용

		if (confirm(`${fn}, ${ln}을 삭제하시겠습니까?`)) {
			e.target.parentElement.parentElement.remove();
		}
	})
	btn.innerText = '삭제';
	td.appendChild(btn);

	tr.appendChild(td);

	document.querySelector('#show tbody').appendChild(tr);
} // end of for of

let sum = 0;
//document.querySelectorAll(`#show tbody tr td:nth-of-type(6)`)// css선택자
		// tr 15개, td7개인데 그 중 td의 6번째 것을 가지고오겠다 ↑
document.querySelectorAll(`#show tbody tr`)	//		
	.forEach(elem => {
		console.log(elem);
		let salary = elem.children[5].innerText; 
		sum += parseInt(salary);
		});
console.log(`합계는 ${sum}`);




// document.querySelectorAll(`#show tbody tr td:nth-of-type(6)`)//
// .forEach(elem => console.log(elem.innerText));
