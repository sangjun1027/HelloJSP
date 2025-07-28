package com.yedam;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

//서블릿의 실행순서
// page.75
// live server : 
// client : 웹서버(정적페이지 html) -> 서블릿컨테이너(tomcat) -> init() -> service
@WebServlet("/board")
public class BoardServlet extends HttpServlet {

	@Override
	public void init(ServletConfig config) throws ServletException {	
		//init 최초호출 시 한 번만 호출
		System.out.println("init() 메소드 호출");
	}
	
	// tomcat이 req, resp 객체를 만들어서 작업을 수행
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
				// service는 호출될 때 마다 호출
		
		if(req.getMethod().equals("GET")) {	//조회
		resp.setContentType("text/html;charset=utf-8");	//인코딩방식을 지정, 이상한글씨 한글로
		
		System.out.println("service() 메소드 호출");		
		// http:..localhost:8080/HelloJSP/board?board_no=3&writer=user01 / ?뒤에 board~ 는 파라메타
		String board_no = req.getParameter("board_no");	// "3"
		int bno = Integer.parseInt(board_no); // "23"-> 23, 즉 문자를 숫자로 변환
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(bno);
		
		// 글번호 : 3,  제목 : 집, 
		// 내용: 집에가고싶다
		// 작성자 : 홍길동
		// 작성일시 : 2025.07.28 13:22:18
		String html = "<table border = '2'>";
		html += "<tr><th>글번호</th><td>" 
				+ board.getBoardNo() + "</td><th>제목</th><td>"
				+ board.getTitle() + "</td></tr>";
		html += "<tr><th>내용</th><td colspan='3'>" 
				+ board.getContent() + "</td></tr>";
		html += "<tr><th>작성자</th><td colspan='3'>"
				+ board.getWriter() + "</td></tr>";
		html += "<tr><th>작성일자</th><td colspan='3'>"
				+ board.getCreationDate() + "</td><tr>";
		html += "</table>";
		// 3번글을 삭제하고 글 목록으로 이동
		// 숙제) DeleteBoard 라는 서블릿생성
		html += "<div><a href='DeleteBoard?board_no=" + board.getBoardNo() + "'>글 삭제</a></div>";	//get방식요청
		html += "<div><a href='BoardListServlet'>글 목록으로</a></div>";
		
		resp.getWriter().println(html);
	}	else if (req.getMethod().equals("POST")) {		//등록기능
		
			// 요청정보의 인코딩지정
		  req.setCharacterEncoding("UTF-8");
		  
		  String title = req.getParameter("title");
		  String content = req.getParameter("content");
		  String writer = req.getParameter("writer");
		  // BoardVO파리미터.
		  BoardVO param = new BoardVO();
		  param.setTitle(title);
		  param.setContent(content);
		  param.setWriter(writer);
		  
		  BoardService svc = new BoardServiceImpl();
		  
		  if (svc.registerBoard(param)) {
			  //목록
			  resp.sendRedirect("BoardListServlet");
		  } else {
			  System.out.println("Error발생");	//에러페이지(jsp)
		  }
	}
  }//end of service
}//end of class

