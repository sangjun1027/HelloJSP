<%@page import="com.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>		<!--  이걸해줘야 호출해서 사용가능 -->
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
    
<jsp:include page = "includes/Header.jsp" />
   
    
    <h3>글 수정화면(modify_board.jsp)</h3>
    <form action="modifyBoard.do">
    <input type ="hidden" value="${board_info.boardNo }" name="bno">
    <table class="table">
        <tr>
            <th>글 번호</th>
            <td><c:out value="${board_info.boardNo }" /></td>
            <th>조회수</th>
            <td><c:out value="${board_info.viewCnt }"/></td>
        </tr>
        <tr>
            <th>제목</th>
             <td colspan='3'><input type="text" class="form-control" name="title" value="${board_info.title }" /></td>
        </tr>
        <tr>
            <th>내용</th>
            <td colspan='3'>
            <textarea class="form-control" name="content">${board_info.content }</textarea></td>
        </tr>
        <tr>
            <th>작성자</th>
            <td><c:out value="${board_info.writer }" /></td>
        </tr>
        <tr>
            <th>작성일시</th>
            <td><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${board_info.creationDate }" /></td>
        </tr>
        <tr>
        	<td colspan ="4" align="center">
        		<input type="submit" value="저장" class="btn btn-success">
        		<button type="button" class="btn btn-secondary">취소</button>
        	</td>
        </tr>
    </table>
    </form>
    <jsp:include page = "includes/Footer.jsp" />