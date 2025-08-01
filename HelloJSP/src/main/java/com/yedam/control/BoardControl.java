package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardControl implements Control{

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) //
				throws ServletException, IOException{
		// parameter (?bno=3) => board.do?bno=144&page=1
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));
		System.out.println(board);
		// board_info에 담아서 board.jsp에 전달ㅇ
		req.setAttribute("board_info", board);
		req.setAttribute("page", page);

		//요청재지정
		req.getRequestDispatcher("user/board.tiles")	// board.jsp에서 페이지 정보를 담아왔음
		.forward(req, resp);
	}
	
	

}
