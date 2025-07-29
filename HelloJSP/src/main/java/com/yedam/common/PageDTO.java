package com.yedam.common;

import lombok.Data;

// 페이징 정보를 담아놓기 위한 class
@Data
public class PageDTO {
	
	private int currPage;		//현재페이지에 대한 정보를 담기위한
	private int start, end;		//시작, 끝 페이지
	
	public PageDTO(int page, int totalCnt) {		//2개의 parameter을 받는 
		currPage = page;	// ex) 현재 페이직다 3페이지 일 때 :  1... 3... 10  <-요렇게 만드는거  
		end = (int) Math.ceil(page * 1.0 / 10) * 10 ;	// ceil : 올림 / 3을 10으로 나누면 0.3 이니깐 올림하면 1
		start = end - 9 ;	
		
	}

}
