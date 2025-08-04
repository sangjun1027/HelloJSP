/**
 * todo1.js
 */
const students = [];
//students.push({name: "홍길동", score: 90});

for ( let i = 0; i < students.length; i ++){
	console.log(`sname: ${students[i].name}, score: ${students[i].score}`)
}

function showList(){
	students.forEach( (elem) => {
		let std = `<tr><td>${elem.name}</td><td>${elem.score}</td></tr>`
		
		document.querySelector("#tlist").innerHTML += std;
	});
}
// 이벤트
document.querySelector('#addList').addEventListener('click', function(){
	let name = document.querySelector('#std_name').value;
	let score = document.querySelector('#std_score').value;
	
	if( name =='' || score =='' ){
		window.alert("마!! 필수값 쳐 넣어라!!");
		return;
	}
	document.querySelector('#tlist').innerHTML = '';
	
	students.push({name: name, score: score});
	showList();
	
	document.querySelector('#std_name').innerHTML = '';
	document.querySelector('#std_score').innerHTML = '';
	
})
