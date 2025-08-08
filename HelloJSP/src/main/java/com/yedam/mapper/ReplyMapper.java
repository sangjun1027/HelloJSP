package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	List<ReplyVO> replyList(@Param("boardNo") int boardNo, @Param("page") int page);	//목록
	int deleteReply(int replyNo);	 //삭제기능
	int insertReply(ReplyVO reply);		// 댓글등록기능, 
	// insert trype은 반환값이 있는데 유형은 int
	int selectCount(int boardNo);	//댓글건수계산
	
	// 전체목록가져오는 기능, 일정추가기능, 일정삭제기능 -> mapper.xml에 추가
	List<EventVO> eventList();	//단순조회는 매개변수가 필요없다
	int insertEvent(String title,String start, String end);
	int addEvent(EventVO evo);
	int insertEvent(EventVO event);
	int deleteEvent(EventVO event);
	

}
