/**
 * dom.js
 *<ul id="target">
	<li>apple</li>
	<li>banana</li>
  </ul>
  Document Object Model
*/

let ul = document.createElement('ul');	// <ul />요소를 만들겠다
ul.setAttribute('id', 'target');	//만들어진 요소에 속성을추가하겠다(setAttribute)
let li = document.createElement('li');	// <li />요소를 만들겠다
li.innerText = 'apple';
ul.appendChild(li);		//ul요소의 하위요소에 li를 등록하겠다.(appendChild)
// banana 추가
li = document.createElement('li');	// <li />요소를 만들겠다
li.innerText = 'banana';
ul.appendChild(li);		

console.dir(ul);	// <ul id='target'><li>apple</li></ul><li>banana</li>

// ↑ 위 코드는 element요소 생성 한 것

// <div id = 'show' / >
document.querySelector('#show').appendChild(ul); 
