package com.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

@WebServlet("/BoardListServlet")	
public class BoardListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public BoardListServlet() {
        super();
        System.out.println("BoardListServlet 생성자.");
    }

	protected void doGet(HttpServletRequest request		//요청정보
			, HttpServletResponse response)		//응답정보
			throws ServletException, IOException {
			//글목록 출력
			response.setContentType("text/html;charset=utf-8"); 
									// 웹브라우저의 content 타입↑
			System.out.println("Hello Servlet !!!");
			
			//웹페이지 출력 ↓
			PrintWriter out = response.getWriter();	//java는 stream을 통해 응답정보를 주고받음
			out.println("<b>Hello, Servlet</b>");
			
			BoardService svc = new BoardServiceImpl();	// service선언
			List<BoardVO> list = svc.boardList(1);
			
			String html = "<table border='2'><thead><tr><th>글번호</th><th>제목</th><th>작성자</th><th>조회수</th></thead>";
			html += "<tbody>";
			for(BoardVO board : list) {	//list안에있는 data만큼만 반복
				html += "<tr><td align='center'><a href='board?board_no="+board.getBoardNo()+"'>" + board.getBoardNo() 
				+ "</a></td><td>" + board.getTitle() 
				+ "</td><td>" + board.getWriter() 
				+ "</td><td>" + board.getViewCnt()
				+ "</td></tr>";
			}
			html += "</tbody></table>";
			out.println(html);
			
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
