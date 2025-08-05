<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>WEB-INF/html/js.jsp</title>
</head>
<body>
	<h3>JS연습</h3>
	<div style="display :none;">
		 ID: <input type="text" id="mid"><br>
		 Name : <input type="text" id="mname"><br>
		 Point : <input type="number" id="point"><br>
		 <button id="addBtn">추가</button>
	</div>
	
	<div style="display :none;">
	  <ul id="list"></ul>
	</div>

	<div style="display :none;">
	  이름: <input type="text" id="std_name"><br>
	  영어: <input type="number" id="std_score"><br>
	  	<button id="addList">추가</button>
	</div>
	<div style="display :none;">
		<table border="2">
		  <thead>
		    <tr>
		      <th>이름</th><th>점수</th>
			</tr>
		<tbody id="tlist">
			<tr><td>홍길동</td><td>90</td></tr> 
		</tbody>					     
		</table>
		</div>
		<!--  0805 -->
	<div id='show'>
	  <table border="2">
	  	<thead>
	  	  <tr>
	  	   <th>id</th><th>FName</th>
	  	   <th>LName</th>
	  	   <th>Salary</th>
	  	   <th>삭제</th>
	  	  </tr>
	  	</thead>
	  	<tbody></tbody>
	  </table>
	</div>			
	
	<div id='item' >
	  <table border="2">
	  	<thead>
	  	  <tr>
	  	   <th>이름</th>
	  	   <th>점수</th>
	  	  </tr>
	  	</thead>
	  	<tbody></tbody>
	  </table>
	</div>		
	
	<script type="text/javascript" src='js/ajax2.js'></script>
<!--  	<script type="text/javascript" src='js/array3.js'></script> -->
</body>
</html>