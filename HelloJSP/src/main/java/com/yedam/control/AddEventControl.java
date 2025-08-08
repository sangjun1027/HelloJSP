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
import com.yedam.vo.EventVO;

public class AddEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) // 
			throws ServletException, IOException {
				String title = req.getParameter("title");
				String start = req.getParameter("start");
				String end = req.getParameter("end");
				
				EventVO evo = new EventVO();
				evo.setTitle(title);
				evo.setStart(start);
				evo.setEnd(end);
				
				Map<String, Object> map = new HashMap<String, Object>();
				ReplyService svc = new ReplyServiceImpl();
				
				if (svc.addEvent(evo)) {
					map.put("retCode", "OK");
					map.put("qnqtr", evo);
				} else {
					map.put("retCode", "NO");
				}
					
/*				try {
					svc.addEvent(map);
					resp.getWriter().print("{\"retCode\":\"OK\"}");
				} catch(Exception e) {
					// e.printStackTrace();
					resp.getWriter().print("{\"retCode\":\"NG\"}"); */
		
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String json = gson.toJson(map);
				
				// json 문자열을 출력 스트림에 연결
				resp.getWriter().print(json);	// 출력
		
		}
	

}
