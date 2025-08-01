package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNo;		// board_no 이렇게 무조건 만들어줘야 데이터가 들어옴
	private String title;
	private String content;
	private String writer;
	private int viewCnt;
	private Date creationDate;
	private Date lastUpdateDate;
	private String image;
	
}
