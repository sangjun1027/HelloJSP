package com.yedam.common;

import lombok.Data;

// 페이징 정보를 담아놓기 위한 class
@Data
public class PageDTO {
	
	private int currPage;		//현재페이지에 대한 정보를 담기위한
	private int start, end;		//시작, 끝 페이지
	private boolean previous, next;	// 이전, 이후 페이지 여부
	
	// 생성자 현재 page를 기준으로 현재page넣고 
	// start와 end page를 계산 1페이지부터 10페이지까지 보여주는거
	// ex) 현재 페이직다 3페이지 일 때 :  1... 3... 10  <-요렇게 만드는거
	public PageDTO(int page, int totalCnt) {		//2개의 parameter을 받는 
		currPage = page;	  
		end = (int) Math.ceil(page * 1.0 / 10) * 10 ;	
		// ceil : 올림 / 3을 10으로 나누면 0.3 이니깐 올림하면 1
		start = end - 9 ;	
		
		// 실제 마지막 페이지
		//  실제 end가 realEnd보다 크면 마지막 페이지가 되어야한다.
		// 즉, end가 realEnd보다 크면 realEnd값을 end에 넣어주고 작다면 end를 그대로 출력
		//    ↓ ↓ ↓ ↓ ↓ ↓ ↓
		int realEnd = (int) Math.ceil( totalCnt * 1.0 / 5 );
		end = end > realEnd ? realEnd : end;		
		
		// 이전, 이후 페이지 존재여부 check
		//    ↓ ↓ ↓ ↓ ↓ ↓ ↓
		previous = start > 1 ? true : false;	
		// ↑ start가 1보다 크면 이전페이지가(11,21,31)있다는 거 true가 변환
		next = end < realEnd;
		
		
		
	} //end of PageDTO

} // end of class
