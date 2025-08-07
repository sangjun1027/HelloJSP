/**
 * 	noardSerevice.js
 */

class PageVO {		// javascript거는 이와같이 class 선언만 가능
	
	// 생성자. 
	constructor(currPage, totalCnt) {	// 
		this.currPage = currPage;	// filed는 따로 필요없고, this 붙여주면된다. 
		//	↑ currPage라는 filed를 선언해준거임
		this.trotalCnt = totalCnt;
		//start, end 계산
		this.end = Math.ceil(currPage / 10 ) * 10;	// 0.3을 올림(ceil)하면 10page
		this.start = this.end - 9;	// 1page / 10 - 9니깐 1페이지
		
		let realEnd = Math.ceil( totalCnt / 5);	//3page
		// ↑ totalCnt롤가지고 실제 마지막 페이지
		this.end = this.end > realEnd ? realEnd : this.end;
		// ? -> 그게 아니면!
		
		// PREN, NEXT 곗산
		this.prev = this.start > 1;		//이전페이지가 있는지 없는지
		this.next = this.end < realEnd;	//다음페이지가 있는지 없는지
		
	}
}
//console.log(new PageVO(11, 96));	/ 확인기능이니, 없어도 됨

const svc = {		// svc 변수선언 / const는 상수
	count: 20,		// 속성 (property)
	increaseCount: function() {		//값을 증가시키는 method
		this.count++;		// 변수는 자기 자신을 가르킬때는 this를 붙인다.
	},
	showCount(){		// method
		return this.count;
	},
	// 목록을 가지고오는 ajax method를 여기서 만들겠다!
	replyList(param = { bno:1 , page:1 }, successCallback, errorCallback) {		// method 이름 지정(replyList)	
		fetch('replyList.do?bno=' + param.bno + '&page=' + param.page)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 삭제 ajax method
	removeReply(rno, successCallback, errorCallback) {
		fetch('removeReply.do?rno='+rno)	// url값만 위와 다르고 나머지는 같다!
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 등록 ajax method
	registerReply(param={bno, reply, replyer}, successCallback, errorCallback) {
		fetch('addReply.do?bno='+ param.bno +'&reply=' + param.reply + '&replyer=' + param.replyer)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	//bno에 대한 전체건수를 얻는 ajax method
	replyTotalCount(bno, successCallback, errorCallback) {
		fetch('totalReply.do?bno='+ bno )	// url값만 위와 다르고 나머지는 같다!
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	}
	
	
}
