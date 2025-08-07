<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>



<h3>글 상세화면(board.jsp)</h3>
<c:if test="${!empty msg }">
	<div style="color: red;">${msg }</div>
</c:if>

<form action="modifyForm.do">
	<input type="hidden" value="${board_info.boardNo }" name="bno">
	<input type="hidden" value="${page}" name="page">
	<table class="table">
		<tr>
			<th>글 번호</th>
			<td><c:out value="${board_info.boardNo }" /></td>
			<th>조회수</th>
			<td><c:out value="${board_info.viewCnt }" /></td>
		</tr>
		<tr>
			<th>제목</th>
			<td colspan='3'><c:out value="${board_info.title }" /></td>
			<td rowpan='2'><c:choose>
					<c:when test="${!empty board_info.image }">
						<img width="300px" src='upload/${board_info.image}'></td>
			</c:when>
			<c:otherwise>
				<img width="250px" src='https://dummyimage.com/300x200/000/00ff7b.jpg&text=No+File'></td>
			</c:otherwise>
			</c:choose>


		</tr>
		<tr>
			<th>내용</th>
			<td colspan='3'><c:out value="${board_info.content }" /></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><c:out value="${board_info.writer }" /></td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss"
					value="${board_info.creationDate }" /></td>
		</tr>
		<tr>
			<td colspan="4" align="center"><input type="submit" value="수정"
				class="btn btn-success">
				<button type="button" class="btn btn-danger"
					${logId eq board_info.writer ? '':'disabled'}>>삭제</button></td>
		</tr>
	</table>
</form>
<!--  댓글 start -->
<style>
	ul {list-style-type: none;}
	span {display: inline-block;}
</style>
<style>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>
<div class="container reply">
<!--  댓글 등록 -->
	<div class="header">
	  <input class="col-sm-8" type="text" id="reply">
	  <button class="btn btn-secondary" id="addReply">댓글등록</button>
	</div>
<!--  댓글 목록 -->
	<div class="content">
	  <ul>
	  	<li>
	  	  <span class="col-sm-2">글 번호</span>
	  	  <span class="col-sm-5">내용</span>
	  	  <span class="col-sm-2">작성자</span>
	  	  <span class="col-sm-2">삭제</span>
	  	</li>
	  	<li><hr /></li>
	  	<li>
	  	  <span class="col-sm-2">12</span>
	  	  <span class="col-sm-5">댓글입니다</span>
	  	  <span class="col-sm-2">user02</span>
	  	  <span class="col-sm-2"><button>삭제</button></span>
	  	 </li>
	  </ul>
	</div>

<!--  댓글 페이징 -->
	<div class="footer">
		<div class="pagination">
		  <a href="#">&laquo;</a>
		  <a href="#">1</a>
		  <a href="#" class="active">2</a>
		  <a href="#">3</a>
		  <a href="#">4</a>
		  <a href="#">5</a>
		  <a href="#">6</a>
		  <a href="#">&raquo;</a>
		</div>
	</div>
</div>

<!--  댓글 end -->
<script>
	const bno = "${board_info.boardNo}";	
	const logId = "${logId}";
</script>

<script src="js/boardService.js"></script>
<script src="js/board.js"></script>
