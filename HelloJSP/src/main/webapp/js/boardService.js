/**
 * 	noardSerevice.js
 */

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
	
	
}
