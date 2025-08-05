/**
 * arrat.js (forEach, map, filter, reduce)
 * document.querySelectorAll에도 사용가능
 */

//members.forEach((elem, idx, ary) => {	//화살표함수 사용
//	if (idx % 2 == 0) {	// index의 홀수값만 보고싶다!
		// 첫 번째꺼만 보고싶은경우 : idx == 0
		// 마지막꺼만 보고시은 경우 : idx == ary.length -1 
//		console.log(elem);
//   }
// });

// 지정한 부분배열들의 합을 구하는 코드
let sum = 0;

[12, 34, 83, 22, 59, 77].forEach((elem, idx, ary) => {
	sum += elem;
	if ( idx == ary.length -1){
		console.log(`합계는 ${sum}`);
	}
});

// 홀수번째만 구해서 더해서 콘솔에 출력해보자
var oddSum = (elem, idx, ary) => {
	if (idx% 2 == 0 ) {
		sum += elem;
	} 
	if (idx == ary.length -1){
		console.log ( `홀수번째 합계는 ${sum}`);
	}
}

// 짝수번째만 구해서 더해서 콘솔에 출력해보자
var evenSum = (elem, idx, ary) => {
	if (elem% 2 == 0 ) {
		sum += elem;
	} 
	if (idx == ary.length -1){
		console.log ( `홀수번째 합계는 ${sum}`);
	}
}

// 전체합계를 구하여 콘솔에 출력해보자
var totalSum = (elem, idx, ary) => {
	sum += elem;
		if ( idx == ary.length -1){
			console.log(`전체 합계는 ${sum}`);
 	}
}
[12, 34, 83, 22, 59, 77].forEach(totalSum);
