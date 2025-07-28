package com.yedam;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.BoardMapper;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class Main {
	public static void main(String[] args) {
		
		BoardService svc = new BoardServiceImpl();	//업무기능
		
		
		int searchNo = 1;
		
		// 조회, 조회수 증가 ↓ => '업무'라는 단위로(조회: 글번호조회 + 조회카운트 => 세트로 묶여져야된다)
		BoardVO board = svc.searchBoard(searchNo);
		
			System.out.println(board.toString());
		}
	}

