package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			resp.setContentType("text/json;charset=utf-8");
		
		// parameter: bno, reply, replyer (총 3개)
		// parameter: addReply.do?bno=310&eply=test&replyer=use01
		String bno = req.getParameter("bno");	// 각각의 파라메타를 갖고오는게 get metrhod
		String reply = req.getParameter("reply");
		String replyer = req.getParameter("replyer");
		
		// addReply(ReplyVO reply)
		ReplyVO rvo = new ReplyVO();
		rvo.setBoardNo(Integer.parseInt(bno));	// 문자타입 "310"이 숫자타입 310으로 형변환
		rvo.setReply(reply);
		rvo.setReplyer(replyer);
		
		// return code생성, bno, reply, replyer 
		// ↑ 이를 담을 수 있는 형태구조가 map type: ( key, value )
		Map<String, Object> map = new HashMap<String, Object>();
		// 	↑key에 해당되는 값은 문자열, 
		// 	↑ ↑value에 해당하는 타입은 문자, 다 받아야되는데 최상위가 object
		
		
		// DB처리 => 반환
		ReplyService svc = new ReplyServiceImpl();
		if (svc.addReply(rvo)) {
			map.put("retCode",  "OK");	//ReplyVO전체를 전달
			map.put("retVal", rvo);
			// resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			map.put("retCode", "NG");
		}
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(map);		
		//map type의 자바객체를 json문자열로 변환해주는 라이브러익다 gson
		resp.getWriter().print(json);	//출력
	}

}// end of class
