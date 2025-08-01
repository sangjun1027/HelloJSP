package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyFormControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		// 수정화면. ex) bno=3 -> 3번글을 수정하겠습니다. =>modifyForm.do?bno=143&page=1
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");	//page에 1 이라는 값을 담음
		
		// DB 조회
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));

		// 권한확인(로그인아이디랑 작성자아이디를 비교해서 권한체크)
		HttpSession session = req.getSession();
		String logId = (String) session.getAttribute("logId");
		
		if (logId != null && logId.equals(board.getWriter())) {
			
			//view영역(jsp)로 값을 전달 /파라메타를 받아와서 어트리뷰트에 담아...
			req.setAttribute("board_info", board);
			req.setAttribute("page", page);

			//요청재지정
			req.getRequestDispatcher("user/modify_board.tiles") // 	
			.forward(req, resp);
			
		} else {
			// 권한이 없을경우
			// board_info에 담아서 board.jsp에 전달
			req.setAttribute("board_info", board);
			req.setAttribute("msg", "권한이 없습니다");
			// 요청 재지정
			req.getRequestDispatcher("user/board.tiles")
				.forward(req, resp);
		}
		
		
	}

}
