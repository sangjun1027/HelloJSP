/**
 * board.js
 *  144 댓글 정보 => json반환 
 */

let page = 1;	//page 변경
// 페이지 로딩시점에 실행
function showReplyList() {		// 최초목록을 그려줘야하기에///
	// 기존목록응 지우고 새로운목록을 ...
	document.querySelectorAll('div.content>ul>li')//
	.forEach((elem, idx) => {
		console.log(elem, idx);
		if(idx >= 2) {
			elem.remove();
		}
	});
	svc.replyList({bno, page},	// 첫 번째 parameter
		result => {
			result.forEach(reply => {	
				let li = makeRow(reply)
				document.querySelector('div.content>ul').appendChild(li);
			})
   	},	// 두 번째 parameter
 	err => console.error(err)		// 세 번째 parameter
   );
} // end of showReplyList()
// 이벤트 등록 (댓글등록)
document.querySelector('#addReply')//
	.addEventListener('click', function(e) {
		// 원본게시글번호(bno), 작성자(logId), 댓글(reply)
	let reply = document.querySelector('#reply').value;
	if ( !bno || !reply || !logId ) {	//true / false => falsy:거짓스럽다(0, '', null. undefined)
		alert('필수값을 입력하세요')	;
		return;
		}
		
// 서버프로그램 호출
svc.registerReply({bno, reply, replyer:logId}, //
		result => {		
			console.log(result)
			if (result.retCode == 'OK') {
			let r = result.retVal;	
			let li = makeRow(r);
			document.querySelector('div.content>ul').appendChild(li);
			
			} else if ( result.retCode == 'NG') {
				alert ('처리 중 예외발생')
			} else {
				alert (' 알 수 없는 코드. 나도몰랑');
			}
		},			// 2번째 param
		err => console.error(err)	//3번째 param
    );
 });		

// 페이징 링크에 클릭 이벤트 등록
document.querySelectorAll('div.footer>div.pagination>a')
	.forEach(atag =>{
		atag.addEventListener('click', e => {
			e.preventDefault();		// 기본기능(default)을 차단하겠다는 의미
			page= e.target.innerText;
			// 목록 그려주기
			showReplyList();
		})
	}) 	
 
 
// 댓글 정보를 활용해서 li>span 구조를 만들기	
function makeRow(reply) {
	let li = document.createElement('li');
	// 화면 출력할 정보를 배열로 선언
	['replyNo', 'reply', 'replyer'].forEach( elem => {
		let span = document.createElement('span');
		span.innerText = reply[elem];	
		if ( elem == 'reply') {		//댓글내용은 너비를 다르게 설정함
			span.setAttribute ( 'class', 'col-sm-5');
		} else {	// 나머지는 col-sm-2
			span.setAttribute( 'class', 'col-sm-2');
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
	let rno =e.target.parentElement.parentElement.children[0].innerText;
		console.log(rno);
		if ( !confirm(`${rno}번 글을 삭제하시겠습니까?`)) {	//confirm의 not은 false
			 alert('삭제를 취소했습니다.');
			 return;	//함수종료
		}
	
// result라는 함수가 boardService.js file에 success에 들어간다 !
svc.removeReply( rno, 	
	result => {
		if(result.retCode == 'OK') {	// return code가 ok냐?
		e.target.parentElement.parentElement.remove();
		} else if (result.retCode == 'NG') {
			alert (' 삭제 실패 !!! ');
		} else {
			alert ('알수 없는 오류가 발생했습니다. 나도몰라 무서워잉');
		}
	 },
	 err => console.error(err)
		)	
}// end of deleteRowFnc