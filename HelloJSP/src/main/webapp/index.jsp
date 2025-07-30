<!-- taglib는 지시자 -->
<%@page import="org.apache.ibatis.reflection.SystemMetaObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>		    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:forward page="boardList.do"></jsp:forward>
	
	
	<h3>Hello,JSP</h3>
	<c:set var = "name" value = "홍길동"></c:set>		<!-- String name = "홍길동" 와 같음-->
	<c:out value = "${name }"></c:out>
	<!--  자바코드를 대신해서 똑같은거를 대신해서 수행하려 하는거기에 자바코드 다 지움 -->
	
	<c:choose>
	<!--  empty쓰면 null, "" 와 같음 -->
	<!--  값이 있으면 not 사용  -->
		<c:when test="${name eq '홍길동' }">		<!-- 표현식에 다양한 부등호사용가능 -->
			<p>정답</p>
		</c:when>
		<c:otherwise>
			<p>오답</p>
		</c:otherwise>			
	</c:choose>
	
	<c:set var = "age" value = "19"></c:set>
	
	<c:if test="${age >= 20 }">
		<p>당신은 성년입니다</p>
	</c:if>
	
	<c:choose>		
		<c:when test="${age >= 30 }">		<!--  jsp에서 제공해주는 표현식(간단한 조건식정도) -->
		   <p style = " color: red;">어른</p>
		</c:when>		
		<c:when test="${age >= 20 }">
		   <p style = " color: red;">성년</p>
		</c:when>		<!--  else if -->
		 <c:otherwise>
		   <p style = " color: green;">미성년</p>
		 </c:otherwise>
	</c:choose>
	<!-- 조건문 ex) if 문 -->
	<c:forEach var = "i" begin = "1" end = "10" step = "2">	<!--  기본값은 step 1 -->		
		<p> 2 * ${i} =  ${2 * i}</p>
	</c:forEach>
			  
	
</body>
</html>