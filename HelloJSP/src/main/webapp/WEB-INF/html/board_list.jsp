<%@page import="com.yedam.common.PageDTO"%>
<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:include page="includes/Header.jsp" />

<%
	// Object obj; => 강제형변환(casting)이 자동으로 이루어짐
	List<BoardVO> list = (List<BoardVO>) request.getAttribute("board_list");
	PageDTO paging = (PageDTO) request.getAttribute("paging");
	// 데이터타입을 변경하겠다. 첫 번째 () 안에 ↑
	// casting => 부모클래스가 자식클래스로 형변환
	%>
<h3>게시글 목록</h3>
<table class='table table-striped'>
	<thead>
		<tr>
			<th>글번호</th>
			<th>제 목</th>
			<th>작성자</th>
			<th>조회수</th>
		</tr> 
   </thead>
	<tbody>
		<% for (BoardVO board : list) { %>
		<tr>
			<td><%=board.getBoardNo()%></td>
			<td><a href='board.do?bno=<%=board.getBoardNo()%>'><%=board.getTitle()%></td>
			<td><%=board.getWriter()%></td>
			<td><%=board.getViewCnt()%></td>
		</tr>
		<%
		} 
		%>
	</tbody>

	 
	</table>
	
	<nav aria-label="Page navigation example">
	<ul class="pagination justify-content-center">
  		<li class="page-item disabled"><a class="page-link">Previous</a>
  		</li>
  		<% for (int p = paging.getStart(); p <= paging.getEnd(); p++) {%>
  		<li class="page-item"><a class="page-link" href="boardList.do?page=<%=p %>"><%=p %></a></li>
  		<%} %>
  		<li class="page-item"><a class="page-link" href="#">Next</a></li>
	</ul>
	</nav>
	
<jsp:include page= "includes/Footer.jsp"/>