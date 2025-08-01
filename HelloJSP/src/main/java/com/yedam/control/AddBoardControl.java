package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;


public class AddBoardControl implements Control {
	
	@Override
		public void execute(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
			// text형식만이 아닌 file전송, 처리를 위해
			//key=value + 파일 = 처리
			//libreary : cos.jar   를 활용해서 Multipart요청을처리, Multipart:server특정 위치에 업로드만 해줌
			// text도 DB에 insert해줘야 함
		
			// 서버상의 upload 폴더에 저장할 것임
		String upload = req.getServletContext().getRealPath("upload");
		System.out.println(upload);
		
			MultipartRequest mr = new MultipartRequest(
					req,	//요청정보 / 5개의 parameter이 와야됨
					upload,	//업로드경로
					1024 * 1024 * 5,// 업로드 가능한 최대파일 크기 지정 ex) 5메가
					"UTF-8",	// 파일안의 언어 인코딩방식
					new DefaultFileRenamePolicy()	//동일이름파일이 있을 시 이름바꿔주는 리네임정책 ( class필요)
					); 
	
			// addBoard.do?title=???writer=???&content=????
	
			String title = mr.getParameter("title");
			String writer = mr.getParameter("writer");
			String content = mr.getParameter("content");
			String img = mr.getFilesystemName("images");	//파일이름 filesystemName를
//	System.out.println(title);
//	System.out.println(writer);
//	System.out.println(content);
	//
			BoardVO param = new BoardVO();
			param.setTitle(title);
			param.setContent(content);
			param.setWriter(writer);
			param.setImage(img);
	
	
	
			BoardService svc = new BoardServiceImpl();
			if ( svc.registerBoard(param)) {

				// 목록이동
			resp.sendRedirect("boardList.do");
			} else {
				System.out.println("Error발생");
			}
	
  } // end of execute

}
