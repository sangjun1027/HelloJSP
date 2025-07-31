package com.yedam.service;
//업무(process)

import java.util.List;

import com.yedam.common.SearchDTO;
import com.yedam.vo.BoardVO;

public interface BoardService {
	public List<BoardVO> boardList(SearchDTO search);	//업무단위표기
	public BoardVO searchBoard(int boardNo);	//조회(조회 + 카운트증가)기능
	public boolean registerBoard(BoardVO board);	// 등록기능
	public boolean remove(int boardNo);	// 삭제기능
	public int totalCount(SearchDTO search);	//게시글 전체건수
	public boolean modifyBoard(BoardVO board); 	// <전달 할 파라메타 지정 / 수정
	}

