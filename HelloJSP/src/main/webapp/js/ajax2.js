/**
 *  ajax2.js
 * JSON.parse(json문자열) -> 자바스크립트 객체
 */

// 페치함수
fetch('js/MOCK_DATA.json')	// Promise객체
	.then(function(result) {
		 console.log(result);	//응답정보(body)
		return result.json();	//Promise객체, json -> method
	})		
	.then(function(result) {
			// console.log(result);
			result.forEach(elem => {
				let tr = document.createElement('tr');
				['id', 'first_name', 'last_name', 'salary']//
				.forEach(field => {
					let td = document.createElement('td');
					td.innerText = elem[field];	//값
					tr.appendChild(td);
				})
			
			
			// 삭제버튼
			let td = document.createElement('td');
			let btn = document.createElement('button');
			btn.innerText = '삭제';
			td.appendChild(btn);
			tr.appendChild(td);
			
			document.querySelector('#show tbody').appendChild(tr);
	  })
	})
	.catch(function(err) {
		console.log(err);
	});
