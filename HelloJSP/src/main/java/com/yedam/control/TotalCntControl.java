package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;

public class TotalCntControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp)// 
			throws ServletException, IOException {
		// ↓ ↓파라미터 bno를 가져와서 서비스를 통해서 count가 나올꺼고 그걸바탕으로
		// bno,{"totalnt":78}가 json 형태로 출력
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();	
		// service를 사용하기위해 객체를 생성한 것 ↑
		int cnt = svc.replyCount(Integer.parseInt(bno));
		// {"totalCnt":12}
		resp.getWriter().print("{\"totalCnt\":" + cnt + "}");

	}

}
