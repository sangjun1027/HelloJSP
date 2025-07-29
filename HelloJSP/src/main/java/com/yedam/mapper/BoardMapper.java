package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.BoardVO;

// 메소드의 규칙만 정의 (추상메소드)
public interface BoardMapper {
	public List<BoardVO> selectList(int page);  // 목록 가져오는 것 
	 		//↑ selectlist가 id값으로, 반환되는 값이 BoardVO타입 그래서 resulttype해서 만들어줘야함
	public BoardVO selectBoard(int boardNo);	//단건조회
	public int updateCount(int boardNo);	//조회수증가
	public int insertBoard(BoardVO board);	// insert
	public int deleteBoard(int boardNo);	// delete
	
}
