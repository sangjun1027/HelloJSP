package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.control.AddBoardControl;
import com.yedam.control.AddReplyControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.ChartControl;
import com.yedam.control.EventControl;
import com.yedam.control.LoginControl;
import com.yedam.control.LoginFormControl;
import com.yedam.control.LogoutControl;
import com.yedam.control.ModifyBoardControl;
import com.yedam.control.ModifyFormControl;
import com.yedam.control.RegisterControl;
import com.yedam.control.RemoveReplyControl;
import com.yedam.control.ReplyListControl;
import com.yedam.control.SignFormControl;
import com.yedam.control.SignUpControl;
import com.yedam.control.TotalCntControl;
// init - service - detroy
// *.do로 끝나는 것은 아래 sevlet로 실행 ↓
// *.do -> 실행할 컨트롤을 여기에 다 등록
// 요청 url === 실행할 컨트롤 매칭
public class FrontController extends HttpServlet {		//.do로 해당되는 건 frontcontroller로!
	
	Map<String, Control> map;
	
	// 생성자
	public FrontController() {
		map = new HashMap<String, Control>();
	}
	
	@Override
	public void init(ServletConfig config) 
			throws ServletException {
		map.put("/boardList.do", new BoardListControl());	//글목록
		map.put("/board.do", new BoardControl() );	//상세화면
		map.put("/register.do", new RegisterControl());	//등록화면
		map.put("/addBoard.do", new AddBoardControl()); //등록처리
		map.put("/modifyForm.do", new ModifyFormControl()); //수정화면
		map.put("/modifyBoard.do", new ModifyBoardControl());	//수정처리
		// 	  url이 있어야됨 ↑
		map.put("/signForm.do", new SignFormControl());
		map.put("/signup.do", new SignUpControl());		//회원가입
		map.put("/loginForm.do", new LoginFormControl());	//로그인화면
		map.put("/login.do", new LoginControl());		
		map.put("/logout.do", new LogoutControl());
		
		
		// 기타
		map.put("/js.do",  new JSControl());	// java script 연습
		
		// 댓글관련
		map.put("/replyList.do", new ReplyListControl()); // 글번로 -> 댓글목록
		map.put("/removeReply.do", new RemoveReplyControl());	//댓글삭제
		map.put("/addReply.do", new AddReplyControl());		//댓글등롣
		map.put("/totalReply.do", new TotalCntControl());	// 댓글건수계산

		// 기타
		map.put("/chartData.do", new ChartControl());
		// fullCalendar 목록
		map.put("/eventlist.do", new EventControl());
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException{
		// url vs uri
		// url => 프로토콜이름 : http://localhost:8080/HelloJSP/boardList.do
		// uri => /HelloJSP/boardList.do => uri
		String uri = req.getRequestURI();
		String context = req.getContextPath();	// HelloJSP
		String page = uri.substring(context.length());	//boardList.do
		System.out.println(page);
		
		Control control = map.get(page);
		control.execute(req, resp);
	}
}
