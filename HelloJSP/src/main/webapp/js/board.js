/**
 * board.js
 *  144 댓글 정보 => json반환 
 */
// 댓글목록 보여주는거와 페이징목록은 바로실행됨!
let page = 1;	//page 변경

// 페이지 로딩시점에 실행
function showReplyList() {		// 최초목록을 그려줘야하기에///
	// 기존목록응 지우고 새로운목록을 ...
	document.querySelectorAll('div.content>ul>li')//
		.forEach((elem, idx) => {
			console.log(elem, idx);
			if (idx >= 2) {
				elem.remove();
			}
		});
		// 목록출력
	svc.replyList({ bno, page },	// 첫 번째 parameter
		result => {
			result.forEach(reply => {
				//↓ makeRow함수 사용시 복잡해서 ... insertAdjacentHTML 함수사용 
				let target = document.querySelector('div.content>ul');
				let text = `<li>
					<span class="col-sm-2">${reply.replyNo}</span>
				    <span class="col-sm-5">${reply.reply}</span>
				    <span class="col-sm-2">${reply.replyer}</span>
				    <span class="col-sm-2"><button onclick='deleteRowFnc(event)'>삭제</button></span>
						   </li>`;
				target.insertAdjacentHTML('beforeend', text);	// 매개값 position, text
				// inserrAdjacentHTML이 DOM형식으로 바꿔준다.
				// let li = makeRow(reply)
				// document.querySelector('div.content>ul').appendChild(li);
			})
			// 페이징목록 그려주기
			showPagingList();
		},	// 두 번째 parameter
		err => console.error(err)		// 세 번째 parameter
	);
} // end of showReplyList()
showReplyList();		//최초목록을 그려줘야하기에, 최초목록 출력, 함수다잉

// 페이징목록 출력
// 코드양이 많고, 복잡하기에 함수로 만들어주는 것
function showPagingList() {

	svc.replyTotalCount(bno,
		result => {
			let totalCnt = result.totalCnt;
			let paging = new PageVO(page, totalCnt);
			console.log(paging);

			// parent요소
			let target = document.querySelector('div.pagination');
			target.innerHTML = '';	// 기존목록삭제
			// 이전페이지 존재여부
			if (paging.prev) {
				let atag = document.createElement('a');
				atag.href = paging.start - 1;
				atag.setAttribute('data-page', paging.start - 1);
				atag.innerHTML = '&laquo;';
				target.appendChild(atag);
			}
			// start ~ end
			for (let p = paging.start; p <= paging.end; p++) {
				let atag = document.createElement('a');
				atag.href = p; //setAttribute('href', p ) / <a href="3">을 주겠다는 뜻
				atag.setAttribute('data-page', p);
				if (p == paging.currPage)	// 현재page의 active지정, active는 색깔넣는거
					atag.setAttribute('class', 'active');
				atag.innerText = p;
				target.appendChild(atag);	// <div class="pagination"><a/></div>
			}
			// 이후페이지 존재여부
			if (paging.next) {
				let atag = document.createElement('a');
				atag.href = paging.end + 1;
				atag.setAttribute('data-page', paging.end + 1);
				atag.innerHTML = '&raquo;';
				target.appendChild(atag);
			}
			// a 태그에 클릭 이벤트
			addEvent();
		},		// 두 번쨰 parameter
		err => console.error(err)		//세 번째 parameter
	)

} // end of showPagingList();

// 이벤트 등록 (댓글등록)
document.querySelector('#addReply')//
	.addEventListener('click', function(e) {
		// 원본게시글번호(bno), 작성자(logId), 댓글(reply)
		let reply = document.querySelector('#reply').value;
		if (!bno || !reply || !logId) {	//true / false => falsy:거짓스럽다(0, '', null. undefined)
			alert('필수값을 입력하세요');
			return;
		}


		// 서버프로그램 호출
		svc.registerReply({ bno, reply, replyer: logId }, //
			result => {
				console.log(result)
				if (result.retCode == 'OK') {
					let r = result.retVal;
					let li = makeRow(r);
					document.querySelector('div.content>ul').appendChild(li);

				} else if (result.retCode == 'NG') {
					alert('처리 중 예외발생')
				} else {
					alert(' 알 수 없는 코드. 나도몰랑');
				}
			},			// 2번째 param
			err => console.error(err)	//3번째 param
		);
	});


// 페이징 링크에 클릭 이벤트 등록
function addEvent() {
	document.querySelectorAll('div.footer>div.pagination>a')
		.forEach(atag => {
			atag.addEventListener('click', e => {
				e.preventDefault();		// 기본기능(default)을 차단하겠다는 의미
				page = e.target.dataset.page;	//data-page => dataSet.page
				// 목록 그려주기
				showReplyList();
			})
		})
} // end of addEvent


// 댓글 정보를 활용해서 li>span 구조를 만들기, makeRow 함수로 생성하여 만듬	
function makeRow(reply) {
	let li = document.createElement('li');
	// 화면 출력할 정보를 배열로 선언
	['replyNo', 'reply', 'replyer'].forEach(elem => {
		let span = document.createElement('span');
		span.innerText = reply[elem];
		if (elem == 'reply') {		//댓글내용은 너비를 다르게 설정함
			span.setAttribute('class', 'col-sm-5');
		} else {	// 나머지는 col-sm-2
			span.setAttribute('class', 'col-sm-2');
		}
		li.appendChild(span);
	})	//반복


	// 삭제버튼
	let span = document.createElement('span');
	span.setAttribute('class', 'col-sm-2');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc);
	btn.innerText = '삭제';
	span.appendChild(btn);
	li.appendChild(span);
	// 생성한 li 반환
	return li;
}	// end of makeRow	


// 데이터 삭제 함수 이벤트 핸들러
function deleteRowFnc(e) {		// button 클릭시 이벤트 생성
	let rno = e.target.parentElement.parentElement.children[0].innerText;
	rno = e.target.closest('li').firstElementChild.innerText;
	if (!confirm(`${rno}번 글을 삭제하시겠습니까?`)) {	//confirm의 not은 false
		alert('삭제를 취소했습니다.');
		return;	//함수종료
	}


	// result라는 함수가 boardService.js file에 success에 들어간다 !
	// fetch 서버프로그램 호출
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {	// return code가 ok냐?
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert(' 삭제 실패 !!! ');
			} else {
				alert('알수 없는 오류가 발생했습니다. 나도몰라 무서워잉');
			}
		},
		err => console.error(err)
	)
}// end of deleteRowFnc