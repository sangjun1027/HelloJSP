<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});

      let countPerUser = [	
    	  // countPerUser라는 변수에 아래 배열을 넣어주면 차트생성가능
    	  ['User', 'Count']
      ]
      
      // ChartControl을 통해서 결과값을 가져오겠다
      // 비동기처리
      fetch('chartData.do')
      	.then(resolve => resolve.json())
      	.then(result => {
      		// console.log(result);	//서버데이터		
      		// 반복문은 fro .. in 활용하면 됨
      		for (let prop in result) {
      			countPerUser.push([prop, result[prop]]);	
      			// result는 prop 키의 값을 꺼내줌
      		} 
	   	   	console.log(countPerUser);	//출력
      		google.charts.setOnLoadCallback(drawChart);
      	})	
      	.catch(err => console.log(err));
      
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable(countPerUser);	// 차트를 그려주는 기능
        // countPerUser에 배열형태의 값이 있어야지 차트를 그려준다.
        var options = {
          title: '회원별 게시글 작성현황'	// key: 'value'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));	
        //getElementMyId도 querySelect랑 같은 역할
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>
  </body>
</html>
