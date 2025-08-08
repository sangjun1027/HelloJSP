package com.yedam.service;

import java.util.List;

import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(int boardNo, int page);	//목록
	boolean removeReply(int replyNo);	// 삭제
	boolean addReply(ReplyVO reply);	// 등록 
	// ReplyVO라는 인스턴스가 와야됨 ↑
	int replyCount(int boardNo);	// 댓글건수
	
	// 목록, 추가, 삭제
	List<EventVO> eventList();	// 목록
	boolean addEvent(EventVO evo);	//등록
	boolean insertEvent(EventVO evo);	//삭제
	boolean removeEvent(EventVO evo);
}
