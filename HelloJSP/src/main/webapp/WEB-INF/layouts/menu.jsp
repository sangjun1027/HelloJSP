<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    

<!--  sidebar 왼쪽 사이드바 영역 -->
<div class="border-end bg-white" id="sidebar-wrapper">
     <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
     <div class="list-group list-group-flush">
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글목록</a>
		 <c:choose>
		 	<c:when test="${empty ligId }">     
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="signForm.do">회원가입</a>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인</a>
         	</c:when>
         </c:choose>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="register.do">게시글등록</a>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>
         
         
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="js.do">JS연습</a>
      </div>
      </div>