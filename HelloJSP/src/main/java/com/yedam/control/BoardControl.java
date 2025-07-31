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
		// parameter (?bno=3)
		String bno = req.getParameter("bno");
		
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));
		System.out.println(board);
		// board_info에 담아서 board.jsp에 전달ㅇ
		req.setAttribute("board_info", board);

		req.getRequestDispatcher("WEB-INF/html/board.jsp")
		.forward(req, resp);
	}
	
	

}
