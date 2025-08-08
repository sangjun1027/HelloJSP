/**
 * openapi.js
 */

let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=KPT2KP%2FbUvG6KaaY%2F4ENm5KuBdYRXjj3nFtGtLCC4xRHnKPtfwFIIAYSKAwjqHoQjsIgYmyMDHu91xMDZScE0w%3D%3D`
// url = 'eventList

// 이벤트 등록
document.querySelector('#search').addEventListener('change',function (e) {
	let sido = e.target.value;	// select tag의 value를 활용해서 함수호출
	searchCenterList(sido);
});

// 검색목록 생성
fetch(url)
	 .then(resolve => resolve.json())	
	 .then (result => {
		const search = document.getElementById('search')
		result.data		// center 목록을 담고있는 배영
		.reduce((acc, elem) => {
		  if( acc.indexOf(elem.sido) == -1) {
			  acc.push(elem.sido);	// ['서울특별시','제주자치도']
		  }
		  return acc;	// 다음순번의 acc값으로 활용
		},[])
		.forEach(elem => {
			// <option value="서울특별시">서울특별시</option>  option tag를 만듬
			let opt = document.createElement('option');
			opt.value = elem;
			opt.innerHTML = elem; 	
			search.appendChild(opt);
		})
		
	})
	.catch(err => console.error(err));
	
// 함수호출
searchCenterList('서울특별시');
	
function searchCenterList(sido) {
		
	fetch(url)
		.then(resolve => resolve.json())
		.then(result =>{
			console.log(result.data);
			document.querySelector('#list').innerHTML = ''	//기존목록지우기
  
//결과값을 반복해서 반복문 활요해서(forEach) 목록생성
  result.data	//전체목록배열
  	.forEach(elem => {
		if (elem.sido == sido) {	//매개값으로 비교하기
			// center정보를 활요해서 tr>td*3 구조로 출력
			let tr = document.createElement('tr');
			tr.addEventListener('click', function(e){
				window.open('daumapi.jsp?lat=' + elem.lat + '&lng=' + elem.lng);
			});
			
			// td 생성하기
			['id', 'centerName', 'phoneNumber']	// 속성배열
			.forEach(prop =>{
				let td = document.createElement('td');
				td.innerText = elem[prop];
				tr.appendChild(td);
			});
			// 생성한 tr을 tbody 하위요소에 등록
			document.getElementById('list').appendChild(tr);
		};
	  });
	})
	.catch(err => console.error(err));
}
	