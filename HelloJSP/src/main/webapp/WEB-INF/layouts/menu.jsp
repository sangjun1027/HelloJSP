<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>







<div class="border-end bg-white" id="sidebar-wrapper">
     <div class="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
     <div class="list-group list-group-flush">
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="boardList.do">게시글목록</a>
		 <c:choose>
		 	<c:when test="${empty logId }">     
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="signForm.do">회원가입</a>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="loginForm.do">로그인</a>
         	</c:when>
         	<c:otherwise>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="register.do">게시글등록</a>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="logout.do">로그아웃</a>
         	</c:otherwise>
         </c:choose>
         <a class="list-group-item list-group-item-action list-group-item-light p-3" href="js.do">JS연습</a>
      </div>
      </div>